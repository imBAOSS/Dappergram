#API Endpoints

##HTML API

**Root**

- `GET /` - Loads React web app

##JSON API

**Users**

- `GET /api/users`
- `GET /api/user/:username`
- `POST /api/users`
- `GET /api/user/:username/photos`
- `GET /api/user/:username/follows`
- `POST /api/user/:username/follows`
- `GET /api/user/:username/followers`

**Session**

- `POST /api/session`
- `DELETE /api/session`

**Photos**

- `GET /api/photos`
- `GET /api/photo/:id`
- `GET /api/photo/:id/comments`
- `POST /api/photos`
- `PATCH /api/photo/:id`
- `DELETE /api/photo/:id`
- `POST /api/photo/:id/likes`

**Comments**

- `POST /api/comments`
- `PATCH /api/comment/:id`
- `DELETE /api/comment/:id`

**Likes**

- `DELETE /api/like/:id`

**Follows**

- `DELETE /api/follow/:id`
