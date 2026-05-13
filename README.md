# Docker Practice Repository

This repository contains hands-on Docker practicals created for learning and practice. The examples cover Dockerfiles, Docker Compose, container networking, volumes, and Maven-based Docker image builds for Java applications.

## Purpose

The goal of this repository is to understand Docker concepts through small practical examples. Each folder focuses on a simple use case so the core ideas are easy to follow before moving to more advanced production setups.

You can use this repository to practice:

- Creating and using Dockerfiles.
- Building custom Docker images.
- Running multiple services with Docker Compose.
- Connecting containers through Docker networks.
- Persisting data with Docker volumes.
- Running application and database services together.
- Building Java application images with Maven plugins.

## Repository Structure

```text
.
├── compose/
│   ├── app.js
│   ├── Dockerfile
│   ├── docker-compose.yaml
│   ├── package.json
│   └── README.md
├── maven/
│   ├── jibplug/
│   │   ├── pom.xml
│   │   └── src/
│   ├── spotifyplug/
│   │   ├── Dockerfile
│   │   ├── pom.xml
│   │   └── src/
│   └── textfile
├── wordpress/
│   ├── docker-compose.yaml
│   └── README.md
├── .gitignore
└── README.md
```

## Practicals Included

### 1. Compose Practical

The `compose` folder contains a basic Node.js and MySQL practical. It demonstrates how to run a Node.js Express application and a MySQL database together using Docker Compose.

This practical helps in understanding:

- How to build a custom Node.js image using a Dockerfile.
- How to define multiple services in a compose file.
- How one container can connect to another container using the service name.
- How to expose an application port to the local machine.
- How to use a Docker volume for database persistence.

Run it with:

```bash
cd compose
docker compose up --build
```

### 2. WordPress Practical

The `wordpress` folder contains a WordPress and MySQL practical. It demonstrates how to set up a WordPress website with a MySQL database using Docker Compose.

This practical helps in understanding:

- How to use official Docker images.
- How to configure WordPress with database environment variables.
- How to run a ready-made CMS application in containers.
- How to store WordPress and database data using Docker volumes.
- How to access a containerized web application from the browser.

Run it with:

```bash
cd wordpress
docker compose up -d
```

Then open:

```text
http://localhost:8080
```

### 3. Maven Docker Practicals

The `maven` folder contains Java Maven examples for building Docker images.

#### Jib Maven Plugin

The `maven/jibplug` project uses the Google Jib Maven Plugin. Jib can build a container image for a Java application without writing a Dockerfile.

Example command:

```bash
cd maven/jibplug
mvn compile jib:dockerBuild
```

This builds the image configured in `pom.xml`:

```text
jibplug:latest
```

#### Spotify Dockerfile Maven Plugin

The `maven/spotifyplug` project contains a Dockerfile and uses the Spotify Dockerfile Maven Plugin concept for building Docker images from Maven.

Example command:

```bash
cd maven/spotifyplug
mvn package
```

The Dockerfile in this folder can also be used directly:

```bash
docker build -t spotifyplug:latest .
```

## Notes

- The `target/` folder is ignored because it contains generated Maven build output.
- Each practical is intentionally simple and focused on learning one Docker concept at a time.
- Check the README inside each practical folder for more specific usage instructions.
