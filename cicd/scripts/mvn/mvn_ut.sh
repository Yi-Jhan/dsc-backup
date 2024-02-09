cp cicd/dockers/mvn/Dockerfile-mvn-ut ./Dockerfile
docker build --no-cache -t dcs-backend:1.0 . || exit 1
docker system prune -f