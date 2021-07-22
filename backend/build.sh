#! /bin/bash
yarn
if [ ${ENV} = "PROD" ]; then
    yarn build
fi
chmod u+x entrypoint.sh