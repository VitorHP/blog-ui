#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
rm -rf docs
cp -r dist docs
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git add -A
git commit -m 'deploy'
git push -f git@github.com:vitorhp/blog-ui.git master