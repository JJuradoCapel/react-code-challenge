#! /bin/bash
if [ ${ENV} = "PROD" ]; then
    yarn start-prod
else
    yarn start
fi