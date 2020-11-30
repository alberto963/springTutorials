<h1 align="center">
    MoviesRestService
</h1>

A RESTful facade backend API with two services:
- Movie service (*movie entity: id, title, description*)
- Movie comments service (*comment entity: id, movieId, username, message*)

## Toolset
- Spring Boot
- Spring MVC
- Spring Data JPA
  * out-of-the-box DAO-generation at runtime via method-naming conventions
  * declarative transaction-boundaries control
- Hibernate
- Jackson Annotations
  * custom serialization of references (@JsonIdentityInfo, @JsonIdentityReference)
- Spring Security
- Apache Derby
- EhCache
- Maven
- Git
- Mockito

## Features
### Implemented requirements
- endpoint for providing combined views of movie details with comments by *movieId* (in JSON)
- endpoint for creating movies
    - authorized with *ROLE_ADMIN*
- endpoint for creating comments
    - authorized with *ROLE_USER*
- backend services able to handle multiple POST requests independently at the same time

### Authentication
- basic authentication
- pre-registered users

### Caching strategy
- movie entity owns the one-to-many relationship with comment
- movie service responses cached with **Least Frequently Used strategy**
- when a new comment comes in for a cached movie, that movie is evicted from the cache so that, at the next retrieval, the movie will be retrieved from the database with the updated list of comments

### Nuances
- upon POSTing movies in parallel, a concurrency-control through transactional serialization is enforced to prevent phantom-reads
- upon POSTing comments, a *ForeignKeyViolationException* is implemented for preventing insertion of comments for non-existing movies

### Unit and Integration Testing
- mocking
- service unit testing
- repository integration testing with embedded in-memory database accessed through Spring JPA *TestEntityManager*
- controller integration testing using *MockMvc* instance to setup a Spring MVC context with a web server
- authentication integration testing loading the *WebApplicationContext* and applying security config

## Prerequisites
- Requires at least Java Runtime 1.8 - [download](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)

## Quick start
Below all the commands to clone, build and run the project with Maven and Java 8 JDK:
- `git clone https://github.com/francescogerardomarra/MoviesRestService.git`
- `cd MoviesRestService`
- `mvn -T 4 clean install`
- `java -jar target/com-ubs-ws-movies-web-1.0.jar`
- the embedded servlet container starts at `http://localhost:4000`

## Running
### Registered users
````
username: admin
password: iamadmin
roles: ADMIN, USER

username: user
password: iamuser
roles: USER
````

### POST movies 
- URL is `http://localhost:4000/ubs/ws/movie`
- only *ADMIN* role can POST.

JSON examples to POST a movie with authentication:
````
{
  "movieId": 1,
  "title": "Shining",
  "description": "This is an horror movie"
}

{
  "movieId": 2,
  "title": "Full metal jacket",
  "description": "This is a war movie"
}
````

### POST comments
- URL is `http://localhost:4000/ubs/ws/comment`
- *USER* and *ADMIN* roles can POST

JSON examples to POST a comment with authentication:
````
{
	"movieId": 1,
	"username": "user1",
	"message": "best horror movie"
}

{
        "movieId": 2,
	"username": "user1",
	"message": "best war movie"
}

{
        "movieId": 1,
	"username": "user2",
	"message": "scary horror movie"
}

{
        "movieId": 2,
	"username": "user2",
	"message": "sad war movie"
}
````

### GET combined views of movie details with comments by *movieId*

- URL is `http://localhost:4000/ubs/ws/movie/{movieId}`
- anyone can view movies with comments

Examples of returned JSONs:

**http://localhost:4000/ubs/ws/movie/1**
````
{
    "movieId": 1,
    "title": "Shining",
    "description": "This is an horror movie",
    "comments": [
        {
            "username": "user1",
            "message": "best horror movie"
        },
        {
            "username": "user2",
            "message": "scary horror movie"
        }
    ]
}
````

**http://localhost:4000/ubs/ws/movie/2**
````
{
    "movieId": 2,
    "title": "Full metal jacket",
    "description": "This is a war movie",
    "comments": [
        {
            "username": "user1",
            "message": "best war movie"
        },
        {
            "username": "user2",
            "message": "sad war movie"
        }
    ]
}
````
****
