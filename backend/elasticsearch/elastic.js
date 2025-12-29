import { Client } from '@elastic/elasticsearch';
import fs from 'fs';
import path from 'path';

// -----------------------------
// 1️⃣ Connect to Elasticsearch
// -----------------------------
const client = new Client({
  node: 'http://localhost:9200'
});

const indexName = 'products';
const jsonPath = path.resolve('../data/products_with_embeddings.json');

// -----------------------------
// 2️⃣ Create index if missing
// -----------------------------
async function createIndex() {
  try {
    const exists = await client.indices.exists({ index: indexName });

    if (!exists) {
      await client.indices.create({
        index: indexName,
        body: {
          mappings: {
            properties: {
              product_name: { type: 'text' },
              product_url: { type: 'keyword' },
              product_type: { type: 'keyword' },
              clean_ingreds: { type: 'text' },
              price: { type: 'keyword' },
              ingredients_list: { type: 'text' },
              effects: { type: 'text' },
              embedding_text: { type: 'text' },
              embedding: { type: 'dense_vector', dims: 384 } // adjust to your embedding length
            }
          }
        }
      });
      console.log(`✅ Index '${indexName}' created!`);
    } else {
      console.log(`ℹ️ Index '${indexName}' already exists`);
    }
  } catch (err) {
    console.error('❌ Error creating index:', err);
  }
}

// -----------------------------
// 3️⃣ Insert a single product
// -----------------------------
async function insertProduct(product) {
  try {
    // Check if the product already exists
    const exists = await client.exists({
      index: indexName,
      id: product.product_url
    });

    if (exists) {
      console.log(`ℹ️ Product already exists: ${product.product_name}`);
      return; // skip insertion
    }

    // Insert new product
    await client.index({
      index: indexName,
      id: product.product_url,
      body: product
    });
    console.log(`✅ Inserted: ${product.product_name}`);
  } catch (err) {
    console.error('❌ Error inserting product:', product.product_name, err);
  }
}

// -----------------------------
// 4️⃣ Insert all products from JSON
// -----------------------------
async function insertAllProducts() {
  try {
    const products = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    console.log(`Found ${products.length} products to insert`);

    for (const product of products) {
      await insertProduct(product);
    }

    // Refresh the index so documents are searchable
    await client.indices.refresh({ index: indexName });
    console.log('✅ All products inserted and index refreshed!');
  } catch (err) {
    console.error('❌ Error reading JSON or inserting products:', err);
  }
}

// -----------------------------
// 5️⃣ Run everything
// -----------------------------
async function run() {
  try {
    const info = await client.info();
    console.log('✅ Connected to Elasticsearch:', info.version.number);

    await createIndex();
    await insertAllProducts();
  } catch (err) {
    console.error('❌ Error running setup:', err);
  }
}

run();