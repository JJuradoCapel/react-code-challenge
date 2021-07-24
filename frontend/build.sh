#! /bin/bash
yarn
echo $1
if [[ $1 == "PROD" ]]; then
    yarn build
fi
chmod u+x entrypoint.sh