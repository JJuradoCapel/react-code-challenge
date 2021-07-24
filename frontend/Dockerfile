FROM node

ARG ENV

COPY . .
RUN chmod u+x build.sh && ./build.sh $ENV
ENTRYPOINT ./entrypoint.sh