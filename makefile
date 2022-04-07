NAME=node_api_test
VERSION=latest

test:
	./node_modules/.bin/mocha tests

install:
	@rm -rf ./node_modules
	npm install

docker-build:
	@docker build -t $(NAME) --build-arg node_env=$(NODE_ENV) -f docker/Dockerfile . 

docker-run:
	@docker run $(NAME)

docker-clean:
	@docker rm $(docker ps -a -q) 