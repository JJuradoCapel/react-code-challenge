FROM node
COPY . .
RUN chmod u+x build.sh && ./build.sh
ENTRYPOINT ./entrypoint.sh