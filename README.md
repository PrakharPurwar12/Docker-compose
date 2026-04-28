# Docker Practice Repository

This repository contains basic Docker practicals created for learning and practice purposes. The main goal of this repository is to understand how Docker and Docker Compose are used to containerize applications, connect multiple services, manage networks, expose ports, and persist data using volumes.

## Purpose

The practicals in this repository are designed to build a strong foundation in Docker concepts through hands-on examples. Each folder focuses on a small real-world use case so that the concepts can be understood in a simple and practical way.

This repository can be used to practice:

- Creating and using Dockerfiles.
- Building custom Docker images.
- Running containers with Docker Compose.
- Connecting multiple containers together.
- Using Docker networks for service communication.
- Using Docker volumes for persistent storage.
- Running application and database services together.

## Practicals Included

### 1. Compose Practical

The `compose` folder contains a basic Node.js and MySQL practical. It demonstrates how to run a Node.js Express application and a MySQL database together using Docker Compose.

This practical helps in understanding:

- How to build a custom Node.js image using a Dockerfile.
- How to define multiple services in a compose file.
- How one container can connect to another container by using the service name.
- How to expose an application port to the local machine.
- How to use a Docker volume for database persistence.

### 2. WordPress Practical

The `wordpress` folder contains a WordPress and MySQL practical. It demonstrates how to quickly set up a WordPress website with a MySQL database using Docker Compose.

This practical helps in understanding:

- How to use official Docker images.
- How to configure WordPress with database environment variables.
- How to run a ready-made CMS application in containers.
- How to store WordPress and database data using Docker volumes.
- How to access a containerized web application from the browser.


## How to Use

Open any practical folder and follow the instructions written in its `README.md` file.

For example:

```bash
cd compose
docker compose up --build
```

Or:

```bash
cd wordpress
docker compose up -d
```

## Note

These practicals are created for practice and learning purposes. They are intentionally kept simple so that the core Docker concepts are easy to understand before moving to more advanced production-level Docker setups.

