#! /bin/bash
yarn
if [[ $1 == "PROD" ]]; then
    yarn build
fi
chmod u+x entrypoint.sh