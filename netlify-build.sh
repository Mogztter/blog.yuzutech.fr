#!/usr/bin/env bash

# force local packages
npm install ./packages/asciidoc-loader
npm install ./packages/ui-loader

antora --html-url-extension-style=indexify --pull site-local.yml --generator ./lib/generator.js
