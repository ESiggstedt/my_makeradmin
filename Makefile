# Updates submodules to the commits indicated in this repository
update:
	git pull
	git submodule update --init --recursive --remote

build:
	docker-compose build

run:
	docker-compose up

migrate:
	./migrate.sh
