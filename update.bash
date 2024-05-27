export NODE_OPTIONS="--openssl-legacy-provider"
yarn build
cp -r src/.vuepress/dist/* /home/ubuntu/html