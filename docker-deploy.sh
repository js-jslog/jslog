#! /bin/bash
sudo docker stop running-jslog
sudo docker ps -aq --no-trunc -f status=exited | sudo xargs docker rm
sudo docker build -t jslog-image .
sudo docker run -d --name running-jslog -p 80:3000 jslog-image
