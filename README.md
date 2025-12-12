# SkinScore

A skincare review platform where users can search, browse, and review products with star ratings, titles, and descriptions. Built with a three-tier architecture for scalability and performance.

## Overview
- Search skincare products and add new ones if not found.
- Write reviews with star ratings, title, and description (images planned).
- Browse products, view aggregated review data (average rating, total reviews), and detailed reviews.
- Filter by category: cleansers, toners, serums, moisturizers, sunscreen.

## Features
- Product search with caching for popular queries.
- Product and review CRUD.
- Category filtering and full product browsing.
- Aggregated metrics: average rating, review count.
- Future: image uploads, precomputed aggregations, full-text search.

## Architecture
Three-tier design: Client (React) → Webserver (Node.js) → Database.

- Client (React)
  - Landing page: search, rankings, browse by category.
  - Product detail: info + reviews, add review.
  - About page.

- Webserver (Node.js)
  - Product CRUD.
  - Review CRUD.
  - Filtering and searching.
  - Aggregated data computation.

- Database
  - Stores users, products, reviews.
  - Secure persistence.

- Performance & Scale
  - Redis: cache product search results or popular products.
  - Message queue (Kafka optional): async tasks like notifications, image processing, heavy aggregations.
  - Load balancer (future): distribute traffic across multiple webservers.

## Tech Stack
- Frontend: React
- Backend: Node.js (Express or similar)
- Database: SQL (e.g., PostgreSQL/MySQL) or NoSQL (e.g., MongoDB)
- Cache: Redis
- Message Queue: Apache Kafka (optional)

## Data Model
```
USERS
---------------------------------
id              PK
name
email
password_hash
created_at
updated_at

PRODUCTS
---------------------------------
id              PK
name
brand
category
average_rating
review_count
created_at
updated_at

REVIEWS
---------------------------------
id              PK
product_id      FK -> PRODUCTS.id
user_id         FK -> USERS.id
title
description
stars
images          (optional)
created_at
updated_at
```

## Repository Structure
```
backend/
frontend/
```

## Getting Started (Local)

### Prerequisites
- Node.js 18+
- Redis (optional for local; recommended)
- Database (PostgreSQL/MySQL/MongoDB)
- Kafka (optional)

### Environment Variables
Create `.env` files under `backend` and `frontend` as needed.

Backend (`backend/.env`):
```
PORT=4000
DATABASE_URL=...            # e.g., postgres://user:pass@localhost:5432/skinscore
REDIS_URL=redis://localhost:6379
KAFKA_BROKERS=localhost:9092
JWT_SECRET=replace_me
```

Frontend (`frontend/.env`):
```
VITE_API_BASE_URL=http://localhost:4000
```

### Install and Run
Use Windows PowerShell.

Backend:
```powershell
cd "c:\Users\Nicol\Desktop\SkinScore\backend"
npm install
# Optional: run database migrations or seed here
npm run dev
```

Frontend:
```powershell
cd "c:\Users\Nicol\Desktop\SkinScore\frontend"
npm install
npm run dev
```

## API Endpoints (Example)
- `GET /products?query=...&category=...` — search/filter products (cached)
- `POST /products` — create product
- `GET /products/:id` — product details + aggregated data
- `GET /products/:id/reviews` — list reviews
- `POST /products/:id/reviews` — create review (stars, title, description, images optional)

## Caching & Messaging
- Redis: cache frequent searches and popular product lists to reduce DB load.
- Kafka: optionally handle asynchronous flows (notifications, image processing, precomputing aggregates).

### Kafka in a Nutshell
- Producers send messages to topics.
- Consumers read from topics.
- Durable, high-throughput streaming platform suitable for pipelines and realtime processing.

## Future Enhancements
- Full-text search (Elasticsearch/Postgres FTS).
- Cloud storage for review images.
- Precompute aggregations to minimize DB load.
- Load balancing and horizontal scaling of webservers.

## Contributing
- Create feature branches from main.
- Keep changes focused; include small tests when feasible.
- Open PRs with clear descriptions.

## License
Proprietary. All rights reserved.
