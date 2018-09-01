#!/bin/bash

echo "Building ..."
bundle exec middleman build --verbose | grep Error
echo "Done."
