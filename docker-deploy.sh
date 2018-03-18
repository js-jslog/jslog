#! /bin/bash
rm-docker-containers
sudo docker build -t jslog-image .
sudo docker run -d --name running-jslog -p 80:3000 jslog-image
