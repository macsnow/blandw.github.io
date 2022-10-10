#!/usr/bin/env sh
set -e

git init
git add -A
git commit -m 'auto commit'

git push -f git@github.com:macsnow/macsnow.github.io.git master:dev

cd -