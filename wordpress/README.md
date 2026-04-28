# Docker Compose WordPress Practical

This practical demonstrates how to run a WordPress website with a MySQL database using Docker Compose.

## What Was Done

- Created a `docker-compose.yaml` file for a WordPress setup.
- Added a MySQL database service using the `mysql:8.0` image.
- Added a WordPress service using the `wordpress:6.4-apache` image.
- Connected WordPress and MySQL using a custom bridge network named `wp-network`.
- Exposed WordPress on port `8080` of the local machine.
- Added Docker volumes to keep data safe even after containers are stopped:
  - `mysql_data`: stores MySQL database files.
  - `wp_content`: stores WordPress content such as themes, plugins, and uploads.

## Services

### MySQL Database

The database container is named `wordpress-mysql`. It creates:

- Database name: `wordpress_db`
- Database user: `wp_user`
- Database password: `wp_pass123`
- Root password: `rootpass123`

### WordPress

The WordPress container is named `wordpress_file`. It connects to the MySQL database using the environment variables defined in the compose file.

## How to Run

Run this command inside the `wordpress` folder:

```bash
docker compose up -d
```

After the containers start, open this URL in the browser:

```text
http://localhost:8080
```

Then complete the WordPress installation steps from the browser.

## How to Stop

```bash
docker compose down
```

To stop the containers and remove the stored WordPress and MySQL data also:

```bash
docker compose down -v
```
