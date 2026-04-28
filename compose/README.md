# Docker Compose Node.js and MySQL Practical

This practical demonstrates how to run a simple Node.js application with a MySQL database using Docker Compose.

## What Was Done

- Created a Node.js application using Express.
- Created a `Dockerfile` to build the Node.js application image.
- Created a `docker-compose.yaml` file to run two services together:
  - `web`: the Node.js application container.
  - `db`: the MySQL database container.
- Connected both containers using a custom bridge network named `net1`.
- Exposed the Node.js application on port `3000`.
- Added a Docker volume named `db-data` to store MySQL data permanently.

## Files Used

- `app.js`: Contains the Express server and MySQL connection code.
- `Dockerfile`: Builds the Node.js application image.
- `package.json`: Stores the Node.js project dependency information.
- `docker-compose.yaml`: Defines and runs the application and database containers.

## How to Run

Run this command inside the `compose` folder:

```bash
docker compose up --build
```

After the containers start, open this URL in the browser:

```text
http://localhost:3000
```

The browser should show:

```text
Hello from compose!
```

## How to Stop

```bash
docker compose down
```

To stop the containers and remove the database volume also:

```bash
docker compose down -v
```

## Note

The MySQL service creates a database named `db1` in `docker-compose.yaml`, while `app.js` currently tries to connect to a database named `test`. For the database connection to work correctly, both names should be the same.
