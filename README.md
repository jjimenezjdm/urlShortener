# URL Shortener

URLShortener is a url shortener to reduce a long link. 

## Tech

This mini project is made using [Node.js](https://nodejs.org/es/) and [Redis](https://redis.io/)


## API

To facilitate the functionalities of the project and the interaction with it, a REST API has been created. 

This API is specified as follows:

### POST /urlShorter

Shorten the URL passed to it in the **"URL"** attribute of the request.

Request:

`{
  "url":"www.google.es"
}`

Response: 

* It will return 200 Ok and the link shortened if everything went correctly.

### GET /:id


Being: id the shortened URL that we have obtained in the previous section.
In the event that said identifier is found in our database, it will redirect to the URL associated with the identifier.

Responses:

* **301 OK** When the URL is registered correctly.
* **404 Not Found** When URL isn't in our system.


## License

Copyright [Judit Jiménez Jiménez] 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

##Developer

Mail: jjimenezjdm@gmail.com



