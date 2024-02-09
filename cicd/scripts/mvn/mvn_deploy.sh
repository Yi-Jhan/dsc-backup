cp cicd/dockers/mvn/Dockerfile-mvn-deploy ./Dockerfile
docker build --no-cache -t dcs-backend:1.0 .
docker system prune -f