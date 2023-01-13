package app.dailyrecipes.model;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "description", length = 2000)
    private String description;

    public Category() {
        
    }

    public Category(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
