Web site configuration example with java configuration of spring context 
========================================================================

**Ref:**
http://kielczewski.eu/2013/11/spring-mvc-without-web-xml-using-webapplicationinitializer/
  
**It demostrates how to have:**
- Controllers configured with java classes instead of web.xml and -servlet.xml conf files.

**Urls:**
http://localhost:8080/my_03_springJavaconfAllReq/customers
http://localhost:8080/my_03_springJavaconfAllReq/customers/101

**Note:**
This project was created with eclipse as maven project, using maven-archetype-webapp, 
adding java dir manually, replacing pom.xml with pom.xml from eugenp tutorial project spring-mvc-java
changing 

 <groupId>com.my.spring.config</groupId>
  <artifactId>my_03_springJavaconfAllReq</artifactId>
  <packaging>war</packaging>
  <version>0.0.1-SNAPSHOT</version>
  <name>my_03_springJavaconfAllReq Maven Webapp</name>
  
  and
  
  <build>
    <finalName>my_03_springJavaconfAllReq</finalName>
    
    Check version of product (ex spring 4.3.0
  Run 'Update maven project'
  
  It may happen that no rest call is working, check in properties, dynamic web module, if it requires a min version (3.0) and it is las (2.3), just uncheck it and repeat maven update and test (for me it worked)
 
 Original reference:
 
# Spring 4 RESTFul Controller Example (REST CRUD Example)
Template example for Spring 4 MVC + RESTful Service with pure Java Configuration (no XML), using Maven build tool.

###1. Technologies
* Spring 4.3.1.RELEASE
* Maven 3.3.3

###2. To Run this project locally
```shell
$ git clone https://github.com/viralpatel/spring4-restful-example
$ mvn tomcat7:run
```
Access ```http://localhost:8080/springrest/customers```

![Spring 4 REST Tutorial](http://img.viralpatel.net/2016/06/spring-4-mvc-rest-controller-service-restful.png) 

###3. To import this project in Eclipse IDE
1. ```$ mvn eclipse:eclipse```
2. Import into Eclipse via **existing projects into workspace** option.
3. Done. 


###4. Project Demo
Please refer to this article [Spring 4 RESTFul Service Tutorial](http://viralpatel.net/blogs/spring-4-mvc-rest-example-json/)   
