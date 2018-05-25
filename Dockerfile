FROM node:9.8

ENV APP_NAME lupus-garupus-front
ENV APP_PATH /opt/${APP_NAME}

# Copy source code
COPY . ${APP_PATH}

VOLUME ${APP_PATH}

# Change working directory
WORKDIR ${APP_PATH}

# Expose API port to the outside
EXPOSE 3001

# Only for dev env, will always use the build for (pre)prod env
CMD ["bash", "./start.sh"]
