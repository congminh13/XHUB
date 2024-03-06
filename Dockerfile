FROM nginx:latest

COPY ./web.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/xhub

COPY . /var/www/xhub