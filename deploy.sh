#!/bin/bash

echo "Deploying ..."
bundle exec middleman deploy
echo "Done."
echo "Do not forget to copy manually the .htaccess file if you have modified it !"
