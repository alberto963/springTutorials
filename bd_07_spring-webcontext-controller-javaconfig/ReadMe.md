Web site configuration example with java configuration of spring context 
========================================================================

**Ref:**
http://kielczewski.eu/2013/11/spring-mvc-without-web-xml-using-webapplicationinitializer/
  
**It demostrates how to have:**
- Controllers configured with java classes instead of web.xml and -servlet.xml conf files.

**Urls:**
http://localhost:8080/bd_07_spring-webcontext-controller-javaconfig/MainBuilding/checkin/130
http://localhost:8080/bd_07_spring-webcontext-controller-javaconfig/SecondaryBuilding/checkin/110

With AlternativeWebApplicationInitializer use:
http://localhost:8080/bd_07_spring-webcontext-controller-javaconfig/checkin/130

**Note:**
This project was created with eclipse as maven project, using maven-archetype-webapp, 
adding java dir manually, replacing pom.xml with pom.xml from eugenp tutorial project spring-mvc-java
