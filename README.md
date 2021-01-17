### Golden Real Estate - Todo Application 

Create a TODO List to Track Project Progress for Various buildings of specualtive company "Golden Real Estate"
The projects are activities to remember and collaborate on; like fixing some defects, cleaning the facade,
renewing the fire extinguishers etc.

#### Scope : 

Properties should be managed (like adding, updating & deleting)

Users should be managed (like adding, updating & deleting)

Projects should be managed (like adding, updating & deleting)

Projects should be assigned to existing user , existing building.

Project progress can be updated per project

------------


#### Technologies

**Frontend** : Reactjs, Bootstrap (for react), JS/HTML, Formik

**Backend** : Spring Rest, Spring Boot, Hibernate, Spring JPA/Data, PostgreSQL

**Database**  Docker for PostgreSQL


------------

Golden Real Estate Todo Application (Project Screen)

[![GoldenRealEstate](https://github.com/sagaydark2020/GoldenRealEstate/blob/main/GoldenRealEstateProject.png "GoldenRealEstate")](https://github.com/sagaydark2020/GoldenRealEstate/blob/main/GoldenRealEstateProject.png "GoldenRealEstate")


------------


### Running the Application

After Downloading the application, Goto the root folder and perform the following commands''

`mvn clean install`

Application can be downloaded and run has two instances
- Backend module
- Frontend module
- Configuring database

##### Backend Module
To Run backend module follow the steps
- Traverse to project folder
-  CD to folder todo-app-bootstrap
-  `mvn jetty:run`

##### Frontend Module
To Run FrontEnd Module follow the steps
-  Traverse to project folder
- CD to folder todo-app-frontend-reactjs
- `npm install`
- `npm start`

##### Configure database, 
To Configure database use two options using docker or local installation of postgres
Application.properties has configuration for the database endpoint url/access credentials

`spring.datasource.url= jdbc:postgresql://localhost:5432/tests`

`spring.datasource.username= sylvain`

`spring.datasource.password= sylvain`

installing database on docker

`docker run -p 5432:5432 --name postgre-db -e POSTGRES_PASSWORD=admin -d postgres:11.5`

Note : postgresql can disable superuser password by configuring attribute in docker run

Configure privilege and database


`docker exec -it postgre-db bash`

'sudo -u postgres psql`

`postgres=# create database tests;`

`postgres=# create user sylvain with encrypted password 'sylvain';`

`postgres=# grant all privileges on database tests to sylvain;`




------------
