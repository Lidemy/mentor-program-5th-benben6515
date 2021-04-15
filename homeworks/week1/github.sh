#!/bin/bash

name=`curl https://api.github.com/users/$1| grep name | cut -d '"' -f4`;
bio=`curl https://api.github.com/users/$1| grep bio | cut -d '"' -f4`;
location=`curl https://api.github.com/users/$1| grep location | cut -d '"' -f4`;
blog=`curl https://api.github.com/users/$1| grep blog | cut -d '"' -f4`;

echo $name ;
echo $bio;
echo $location;
echo $blog;