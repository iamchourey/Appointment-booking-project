FROM openjdk:18
EXPOSE 8080
ADD target/appointment-service.jar appointment-service.jar
ENTRYPOINT ["java","-jar","/appointment-service.jar"]