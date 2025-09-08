---
title: Commands
date: 2025-08-25
---

Om docker te bedienen maak je gebruik van de docker-cli. Als je Docker desktop installeert krijg je deze applicatie erbij op je systeem.
Met de docker-cli kun je commando's sturen naar de docker deamon.  Je start de docker-cli in een terminal

**Locaties waar je uitbreide docker instructies kunt vinden:**
* [Starten met Docker](https://docs.docker.com/get-started/get-docker/)
* [Docker Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)
* [Cheatsheet from Nikoo Asadnejad](https://github.com/Nikoo-Asadnejad/Docker-Commands-Cheat-Sheet)

## Docker Command Cheat Sheet

***Getting Started***

| Command                                      | Description                                         |
|----------------------------------------------|-----------------------------------------------------|
| `docker --version`                           | Display the installed Docker version                |
| `docker info`                                | Display system-wide information about Docker        |
| `docker help`                                | Display help for Docker commands                    |

---

***Images***

| Command                                      | Description                                         |
|----------------------------------------------|-----------------------------------------------------|
| `docker pull <image>`                        | Pull an image from Docker Hub                       |
| `docker images`                              | List all available images                           |
| `docker rmi <image>`                         | Remove an image                                     |
| `docker build -t <image-name>:<tag> <path>`  | Build an image from a Dockerfile                    |
| `docker tag <source-image> <target-image>`   | Tag an image with a new name                       |
| `docker search <term>`                       | Search for images on Docker Hub                     |

---

***Containers***

| Command                                      | Description                                         |
|----------------------------------------------|-----------------------------------------------------|
| `docker run <image>`                         | Run a command in a new container                    |
| `docker run -d <image>`                      | Run a container in detached mode                    |
| `docker run -d  --name <name> -p <Serverport>:<containerport> <image>`                      | Run a container in detached mode give it specific name and map the port of the container                   |
| `docker run -tid <image> sh`                 | Open shell of the container in current terminal     |
| `docker ps` or `docker container ls`         | List running containers                             |
| `docker ps -a` or `docker container ls -a`   | List all containers, including stopped ones         |
| `docker stop <container>`                    | Stop a running container                            |
| `docker container kill <container>`          | Kill a running container                            |
| `docker start <container>`                   | Start a stopped container                           |
| `docker restart <container>`                 | Restart a container                                 |
| `docker rm <container>`                      | Remove a stopped container                          |
| `docker rm <container> --force`              | Remove a stopped container forcably                 |
| `docker exec -it <container> <command>`      | Execute a command inside a running container        |
| `docker logs <container>`                    | Fetch the logs of a container                       |


***Docker Compose***

| Command                                      | Description                                         |
|----------------------------------------------|-----------------------------------------------------|
| `docker-compose up`                          | Start all services defined in a `docker-compose.yml` file. Creates and starts containers as needed. |
| `docker-compose up -d`                       | Start services in detached mode (running in the background). |
| `docker-compose down`                        | Stop and remove containers, networks, volumes, and images created by `docker-compose up`. |
| `docker-compose down -v`                     | Stop and remove services along with their associated volumes. |

***Networking***

| Command                                      | Description                                         |
|----------------------------------------------|-----------------------------------------------------|
| `docker network ls`                          | List all existing Docker networks. Displays details such as network name, ID, driver type, and scope. |
| `docker network create <network-name>`      | Create a new user-defined network with the specified name. By default, it uses the `bridge` driver. |
| `docker network create --driver <driver-name> <network-name>` | Create a network using a specific driver (e.g., `bridge`, `overlay`, `host`, or `none`). |
| `docker network rm <network-name>`          | Remove a Docker network. The network must not be in use by any containers. |
| `docker network inspect <network-name>`     | Display detailed information about a network, including connected containers, IP ranges, and driver type. |
| `docker run --network <network-name> <image>`| Start a container and connect it to a specific network at runtime. |
| `docker network connect <network-name> <container-id>` | Connect an existing container to a specified network. |
| `docker network disconnect <network-name> <container-id>` | Disconnect a container from a specific network. |
| `docker network prune`                      | Remove all unused Docker networks. Be cautious as it deletes networks not being used by containers. |
| `docker-compose up`                         | Automatically creates and manages a network for the services defined in the `docker-compose.yml` file. |
| `docker network create --subnet=<CIDR> <network-name>` | Create a network with a custom subnet (CIDR notation). |
| `docker network create --gateway=<IP> <network-name>` | Create a network with a custom gateway IP address. |
| `docker network create -o com.docker.network.bridge.name=<bridge-name> <network-name>` | Create a `bridge` network with a specific bridge name. |


***Volumes***

| Command                                      | Description                                         |
|----------------------------------------------|-----------------------------------------------------|
| `docker volume ls`                           | List all volumes                                    |
| `docker volume create <volume-name>`        | Create a new volume                                 |
| `docker volume rm <volume-name>`            | Remove a volume                                     |
| `docker run -v <volume-name>:<container-path> <image>`| Mount a volume into a container             |

