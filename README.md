# laravel9-React-inertiajs-docker

## create env file ##
copy .env.example and rename to .env

## run docker ##
```bash
docker compose up --build
```

## update key ##
```bash
php artisan key:generate
```

## create DB ##
```bash
php artisan migrate
```

## restart docker ##
```bash
docker compose down
docker compose up
```
