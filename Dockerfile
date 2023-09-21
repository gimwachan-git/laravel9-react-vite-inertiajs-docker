FROM php:8.1-cli

RUN apt-get update && apt-get install -y git unzip libpng-dev libonig-dev libxml2-dev zip && \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

WORKDIR /var/www/html
