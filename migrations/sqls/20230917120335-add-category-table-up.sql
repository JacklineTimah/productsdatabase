/* Replace with your SQL commands */
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name varchar,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)