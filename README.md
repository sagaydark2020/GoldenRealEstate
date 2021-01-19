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

Project can be filter per person, per building and based on the progress status

------------


#### Technologies

**Frontend** : Reactjs, Bootstrap (for react), JS/HTML, Formik

**Backend** : Spring Rest, Spring Boot, Hibernate, Spring JPA/Data, PostgreSQL

**Database**  Docker for PostgreSQL


------------

Golden Real Estate Todo Application (Project Screen) 

Theme : Based on blend of Glass Morphism (UX) latest and traditional business flows

[![GoldenRealEstate](https://github.com/sagaydark2020/GoldenRealEstate/blob/main/GoldenRealEstateProject.png "GoldenRealEstate")](https://github.com/sagaydark2020/GoldenRealEstate/blob/main/GoldenRealEstateProject.png "GoldenRealEstate")

Project Screens
[![GoldenRealEstate](https://github.com/sagaydark2020/GoldenRealEstate/blob/main/ProjectCollage.png "GoldenRealEstate")](https://github.com/sagaydark2020/GoldenRealEstate/blob/main/ProjectCollage.png "GoldenRealEstate")
------------


### Running the Application [Database must be configured before running]

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
-  `mvn spring-boot:run`

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

Installing Docker PostGreSQL to use with application

`docker run -p 5432:5432 --name postgre-db -e POSTGRES_PASSWORD=admin -d postgres:11.5`

Note : postgresql can disable superuser password by configuring attribute in docker run

Configure privilege and database


`docker exec -it postgre-db bash`

[Updated]
`/usr/bin/psql postgres postgres` 

`postgres=# create database tests;`

`postgres=# create user sylvain with encrypted password 'sylvain';`

`postgres=# grant all privileges on database tests to sylvain;`




------------

### Working with the application
- Select People -> Add new People 
- Select Property -> Add New Property 
- Select Project -> Add New Project 
- Perform operations such as changing the project state, assignment etc

------------

### Challenges/Limitation/Learnings

- UX : Late 2020/2021 trend has been Glass Morphism or Abstract Glass design. Focussed in bringing which is fusion of Glass/Normal design removed clutters
- UI : Being familiar in Dojo, HTML/CSS, Vanilla Javascript. Though have having worked in ReactJS, it was good learning.
-    : React Utilities such as Formik was challenge due to limited documentations
- Spring Boot/Java :  Its Plain Springboot application performing CRUD opertions
- Structure : Project follows layered architecture
- Possible Additions : Visualized to perform Security/Role Based Access not achieved in this version

------------
