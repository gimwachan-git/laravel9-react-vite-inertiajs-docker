# laravel9-React-inertiajs-docker

## How to use ##

### create env file ###
copy .env.example and rename to .env

### run docker ###
```bash
docker compose up --build
```

### update key ###
```bash
php artisan key:generate
```

### create DB ###
```bash
php artisan migrate
```

### restart docker ###
```bash
docker compose down
docker compose up
```
## Introduction ##
In /routes, there are some example for creating route in laravel.

In http://0.0.0.0:8000/users, there is a page for showing how to get data from server side by useing UserController(/app/Http/Controllers/Controller.php)

In http://0.0.0.0:8000/users/create, there is a page for showing how to post data to server side by useing UserController(/app/Http/Controllers/Controller.php)

http://0.0.0.0:8000/react-dashboard is a example for React Router

