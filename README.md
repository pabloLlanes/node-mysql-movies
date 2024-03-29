## Backend movies - NodeJS & MySql

**Server:** Node, Express
**DataBase:** MySQL

## Installation

required node and mysql db


```bash
 git clone https://github.com/pabloLlanes/node-mysql-movies
 ```
 ```bash

 cd node-mysql-movies
 npm install
 npm run dev  ---> for dev mode
 npm start    ---> for production
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` ---> server express port || default: 4000

`DB_USER` ---> db user name

`DB_PASSWORD` ---> db user name

`DB_NAME` ---> db name

`DB_HOST` ---> host || default: 127.0.0.1

`DB_PORT` ---> db port || default 3306

`JWT_TOP_SECRET` ---> jwt secret key

`JWT_EXPIRES` ---> time to expires jwt || default: '12h'


## API Reference

#### register user

```http
  POST /api/users/auth/register
```

| body JSON     | Type     | Description   |
| :------------ | :------- | :------------ |
| `email`       | `string` | **Required**. |
| `password`    | `string` | **Required**. |
| `description` | `string` | **Required**. |

#### login user

```http
  POST /api/users/auth/login
```

| body JSON  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

`return access token`

#### Get all movies

```http
  GET /api/movies
```

#### Create movie - protected endpoint

```http
  POST /api/movies
```

| body JSON     | Type      | Description   |
| :------------ | :-------- | :------------ |
| `title`       | `string`  | **Required**. |
| `year`        | `integer` | **Required**. |
| `description` | `string`  | **Required**. |

| header TOKEN     | token | Description   |
| :--------------- | :---- | :------------ |
| `x-access-token` | `jwt` | **Required**. |

`the token is obtained after the login`

#### Get all tvshows

```http
  POST /api/tvshows
```

#### Get all seasons

```http
  POST /api/seasons
```

#### Get all episodes

```http
  POST /api/episodes
```

#### Get all tvshows

```http
  POST /api/tvshows
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Author

- [@pabloLlanes](https://github.com/pabloLlanes)
