<h1 align="center">
    my_07_SpringBasic
</h1>

<ul>
ref: https://www.devglan.com/spring-boot/spring-boot-h2-database-example
</ul>
<ul>
ref: https://springframework.guru/using-the-h2-database-console-in-spring-boot-with-spring-security/
</ul>

<p>
DTO is an abbreviation for Data Transfer Object, so it is used to transfer the data between classes and modules of your application.

DTO should only contain private fields for your data, getters, setters, and constructors.
DTO is not recommended to add business logic methods to such classes, but it is OK to add some util methods.
<br>
DAO is an abbreviation for Data Access Object, so it should encapsulate the logic for retrieving, saving and updating data in your data storage (a database, a file-system, whatever).

Here is an example of how the DAO and DTO interfaces would look like:

interface PersonDTO {
    String getName();
    void setName(String name);
    //.....
}

interface PersonDAO {
    PersonDTO findById(long id);
    void save(PersonDTO person);
    //.....
}
</p>
<br>
<p>
Data transfer object (DTO), formerly known as value objects or VO, is a design pattern used to transfer data between software application subsystems. DTOs are often used in conjunction with data access objects to retrieve data from a database.

The difference between data transfer objects and business objects or data access objects is that a DTO does not have any behaviour except for storage and retrieval of its own data (accessors and mutators).

In a traditional EJB architecture, DTOs serve dual purposes: first, they work around the problem that entity beans are not serializable; second, they implicitly define an assembly phase where all data to be used by the view is fetched and marshalled into the DTOs before returning control to the presentation tier.
</p>