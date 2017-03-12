#Schema Information

**users**

| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| photo_url       | string    |                           |

**photos**

| column name | data type | details                        |
|-------------|-----------|--------------------------------|
| id          | integer   | not null, primary key          |
| user_id     | integer   | not null, indexed, foreign key |
| photo_url   | string    | not null                       |
| description | text      |                                |

**comments**

| column name | data type | details                        |
|-------------|-----------|--------------------------------|
| id          | integer   | not null, primary key          |
| user_id     | integer   | not null, indexed, foreign key |
| photo_id    | integer   | not null, indexed, foreign key |
| body        | text      | not null                       |

**likes**

| column name | data type | details                        |
|-------------|-----------|--------------------------------|
| id          | integer   | not null, primary key          |
| user_id     | integer   | not null, indexed, foreign key |
| photo_id    | integer   | not null, indexed, foreign key |

**follows**

| column name | data type | details                        |
|-------------|-----------|--------------------------------|
| id          | integer   | not null, primary key          |
| follower_id | integer   | not null, indexed, foreign key |
| followee_id | integer   | not null, indexed, foreign key |
