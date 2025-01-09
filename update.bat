npm run docs:build
scp -P 2233 -r docs/.vuepress/dist/* ubuntu@nc-ai.cn:/home/ubuntu/html