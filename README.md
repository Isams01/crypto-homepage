# Basic design requirements

- User login
- Interface to interact with the blockchain

# ERD

```mermaid
  erDiagram
    app_user {
      Long id PK
      string firstname
      string lastname
      string email
      string password
      string role
      bool locked
      bool enabled
      timestamp birthday
    }

    confirmation_token {
      long id PK
      long app_user_id FK
      String token
      datetime created_at
      datetime expires_at
      datetime confirmed_at
    }

    app_user ||--o| confirmation_token : app_user_id
```

# Endpoints

## Login

### POST /api/v1/login

_Request_

```json
{
  "username" : string,
  "password": hash
}
```

_Response_

```json
{
  "status": HTTP_STATUS,
  "token": JWT
}
```

_Headers_

```
Authorization: bearer ...
```
