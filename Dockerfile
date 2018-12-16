FROM nginx:1.13.12-alpine

ADD builds/app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]