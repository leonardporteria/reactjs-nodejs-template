# ReactJS + NodeJS + MySQL Starter

A starter kit for building a Full-stack web application using:

- ReactJS
- SCSS
- RESTful API
- NodeJS
- Express
- MySQL

> CRUD not implemented, only the database connection, however, routes are defined and already have the CRUD methods in the server side.

## Setup

Clone

```
    git clone git@github.com:leonardporteria/reactjs-nodejs-template.git
    cd reactjs-nodejs-template
```

Set a terminal for server and client

```
    cd server
```

```
    cd client
```

Install Dependencies

> client & server

```
    npm i
```

> server

Run

> client

```
    npm run dev
```

> server

```
    nodemon server
```

## Dependencies:

### Client

```bash
    "react-router-dom": "^6.15.0",
    "sass": "^1.65.1",
    "scss": "^0.2.4"
```

### Server

```bash
    "dotenv": "^16.3.1",
    "express": "^5.0.0-beta.1",
    "mysql2": "^3.6.0",
    "nodemon": "^3.0.1"
```

### .env Setup

```bash
MYSQL_HOST="127.0.0.1"
MYSQL_USER="root"
MYSQL_PASSWORD="<your_password>"
MYSQL_DATABASE="<name_of_database>"
```
