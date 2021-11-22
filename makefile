NAME=node_api_test
VERSION=latest

test:
	./node_modules/.bin/mocha tests

install:
	@rm -rf ./node_modules
	npm install

docker-build:
	@docker build -t $(NAME) -f docker/Dockerfile .

docker-run:
	@docker run $(NAME)