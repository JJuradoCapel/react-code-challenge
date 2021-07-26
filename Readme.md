# Phone catalog
## Introduction
Welcome to the phone catalog. Navigate around different brands and models in this interactive grid.

## How to use it
The project require `docker` and `docker-compose` to run it. There are two different docker compose files, `docker-compose.yml` and `docker-compose.prod.yml`. First one is intended to be used as a development tool, and the second one as the production build.

* Use `docker-compose up` in the root of the project to start the development build. Changing any file will trigger a hot reloading of that module. Docker will expose,
  * The frontend instance in `localhost:3030`
  * The backend instance in `localhost:8080`
  * The mongodb instance in `localhost:27017`
* Use `docker-compose -f docker-compose.prod.yml up` in the root of the project to start the production mode. In this case, Docker will expose,
  * The frontend instance in `localhost`
  * The backend instance in `localhost:8080`
  * Will not expose the mongodb instance

## Initial data and images
In the initialization process of the backend, if the db is empty, the file `./backend/initialData/initialPhones.json` will be loaded into the collection. The default images for those phones are included in the images' folder that is automatically mounted into the backend instance.

This process could be skipped with the flag `BYPASS_INITIAL_DATA_LOAD`
## Run each module manually
Each module could be run manually outside the docker structure, in that case, there are some extra requirements,
* `node` and `yarn` installed
* A running `MongoDB` instance with write access

Follow the next steps in **both** folders (`backend` and `frontend`) to start the project manually,
* Copy and rename the `.env.example` file to `.env` and update the variables values (check the next section to a description of each variable)
* Install the dependencies with `yarn`
* Use,
  * `yarn start` to start the module in development mode
  * `yarn build` to compile the production build, and `yarn start-prod` to run it
### Environment variables
#### Backend
Name | Description
---- | ----
NODE_ENV | Environment flag
DB_URI | MongoDB instance uri
BYPASS_INITIAL_DATA_LOAD | Skip the initial data load if the data base is empty
#### Frontend
Name | Description
---- | ----
NODE_ENV | Environment flag
REACT_APP_BACKEND_URL | Backend URL
