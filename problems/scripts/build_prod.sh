#!/usr/bin/env bash

ng build --configuration=production --base-href=https://francisco-rma.github.io/
rm -rf ../docs
cp -r dist/problems ../docs
cp ../docs/index.html ../docs/404.html