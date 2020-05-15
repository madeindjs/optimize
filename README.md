# Optimiz



## Setup

To run it simply use docker:

- for development
~~~bash
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
~~~
- for production
~~~bash
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
~~~

Then you can open your browser at <http://lvh.me>.

> `lvh.me` is a domain who redirect to `localhost` and allow you to simulate subdomain without edit your `/etc/host` file.