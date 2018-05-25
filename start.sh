# Only use for local env
if [ $NODE_ENV == 'dev' ] || [ $NODE_ENV == 'docker' ]; then
  npm install
  npm run start
fi
