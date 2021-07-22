#! /bin/bash
yarn
if [ ${NODE_ENV} = "PROD" ]; then
    yarn build
fi
chmod u+x entrypoint.sh