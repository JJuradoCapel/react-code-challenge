#! /bin/bash
if [[ $NODE_ENV == "PROD" ]]; then
    yarn start-prod
else
    yarn start
fi