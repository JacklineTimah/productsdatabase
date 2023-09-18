/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(100),
    email varchar(100) UNIQUE,
    password varchar(50),
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)