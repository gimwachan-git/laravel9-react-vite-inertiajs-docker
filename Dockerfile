# 使用特定版本的 PHP
FROM php:8.1-cli

# 安装系统依赖和 PHP 扩展
RUN apt-get update && apt-get install -y git unzip libpng-dev libonig-dev libxml2-dev zip && \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# 安装 Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

WORKDIR /var/www/html
