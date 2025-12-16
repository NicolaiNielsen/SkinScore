"""
EMBEDDING GENERATION PIPELINE
==============================

This script transforms skincare product data into numerical embeddings that can be used
for similarity comparisons and machine learning tasks.

OVERVIEW:
1. Load a CSV file containing product names and ingredients
2. Clean and normalize ingredient names (remove duplicates, standardize format)
3. Extract ingredient effects using a predefined mapping dictionary
4. Create text descriptions for each product
5. Convert text descriptions into 384-dimensional numerical vectors using a pre-trained
   SentenceTransformer model (all-MiniLM-L6-v2)
6. Save the results to a JSON file for downstream use
"""

import pandas as pd
import ast
from pathlib import Path
from sentence_transformers import SentenceTransformer

# --- Load CSV ---
csv_path = Path(__file__).parent.parent.parent / "data" / "products.csv"
df = pd.read_csv(csv_path)

print(df.head())

# --- Parse clean_ingreds (convert string representation to actual list) ---
df['ingredients_list'] = df['clean_ingreds'].apply(ast.literal_eval)

print(df[['product_name', 'ingredients_list']].head())

# --- Normalize Ingredients ---
def normalize_ingredients(ingredients):
    cleaned = [ing.strip().lower() for ing in ingredients if isinstance(ing, str)]
    return list(set(cleaned))

df['ingredients_list'] = df['ingredients_list'].apply(normalize_ingredients)

# --- Ingredient Effects Mapping ---
INGREDIENT_EFFECTS = {
    # Brightening / Even skin tone / Dullness
    "niacinamide": ["brightening", "barrier-repair", "even-skin-tone", "dullness", "anti-aging"],
    "vitamin c": ["brightening", "antioxidant", "even-skin-tone", "dullness"],
    "ascorbic acid": ["brightening", "antioxidant", "even-skin-tone", "dullness"],
    "tocopherol": ["antioxidant", "anti-aging"],
    "licorice root extract": ["brightening", "even-skin-tone", "dullness"],

    # Hydration / Moisture
    "glycerin": ["hydrating"],
    "sodium hyaluronate": ["hydrating", "plumping"],
    "urea": ["hydrating"],
    "panthenol": ["soothing", "barrier-repair"],

    # Barrier repair / lipids
    "ceramide np": ["barrier-repair", "hydrating"],
    "ceramide ap": ["barrier-repair", "hydrating"],
    "ceramide eop": ["barrier-repair", "hydrating"],
    "cholesterol": ["barrier-repair", "hydrating"],
    "squalene": ["hydrating", "barrier-repair"],

    # Soothers / calming
    "allantoin": ["soothing"],
    "bisabolol": ["soothing"],
    "aloe barbadenis extract": ["soothing", "hydrating"],

    # Anti-aging / firming
    "retinol": ["anti-aging", "firming", "cell-turnover"],
    "peptides": ["anti-aging", "firming"],
    "coenzyme q10": ["anti-aging", "antioxidant"],

    # Sunscreens / UV protection
    "homosalate": ["UV-protection"],
    "octocrylene": ["UV-protection"],
    "butyl methoxydibenzoylmethane": ["UV-protection"],

    # Exfoliants / acids
    "lactic acid": ["exfoliating", "radiance", "even-skin-tone"],
    "salicylic acid": ["exfoliating", "clarifying"],

    # Oils / emollients
    "capric triglyceride": ["emollient", "hydrating"],
    "cetearyl alcohol": ["emollient"],
    "cetyl alcohol": ["emollient"],

    # Misc / preservatives
    "phenoxyethanol": ["preservative"],
    "chlorphenesin": ["preservative"]
}

# --- Extract Effects ---
def extract_effects(ingredients):
    effects = set()
    for ing in ingredients:
        effects.update(INGREDIENT_EFFECTS.get(ing, []))
    return list(effects)

df['effects'] = df['ingredients_list'].apply(extract_effects)
print(df[['product_name', 'effects']].head())

# --- Build Embedding Text Including Effects ---
def build_embedding_text(name, ingredients, effects):
    return f"Product name: {name}. Ingredients: {', '.join(ingredients)}. Effects: {', '.join(effects)}."

df['embedding_text'] = df.apply(
    lambda x: build_embedding_text(x['product_name'], x['ingredients_list'], x['effects']),
    axis=1
)

# --- Generate Embeddings ---
model = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = model.encode(df['embedding_text'].tolist(), show_progress_bar=True)
df['embedding'] = embeddings.tolist()

print(df[['product_name', 'embedding']].head())

# --- Save to JSON ---
output_path = Path(__file__).parent.parent.parent / "data" / "products_with_embeddings.json"
df.to_json(output_path, orient="records")
print(f"Embeddings saved to {output_path}")
