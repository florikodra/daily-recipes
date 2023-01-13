package app.dailyrecipes.model;

import java.text.DecimalFormat;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "recipes")
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "image", length = 255)
    private String image;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "description", length = 2000)
    private String description;

    @Column(name = "servings")
    private Double servings;

    @Column(name = "ingredients", length = 2000)
    private String ingredients;

    @Column(name = "published")
    private boolean published;

    @ManyToMany(fetch = FetchType.LAZY,
      cascade = {
          CascadeType.PERSIST,
          CascadeType.MERGE
      })
    @JoinTable(name = "recipe_categories",
        joinColumns = { @JoinColumn(name = "recipe_id") },
        inverseJoinColumns = { @JoinColumn(name = "category_id") })
    private Set<Category> categories = new HashSet<>();

    public Recipe() {

	}

    public Recipe(String image, String name, String description, Double servings, String ingredients, boolean published) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.servings = servings;
        this.ingredients = ingredients;
        this.published = published;
    }

    public Long getId() {
		return id;
	}

    public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    public Double getServings() {
		return servings;
	}

	public void setServings(Double servings) {
		this.servings = servings;
	}

    public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean isPublished) {
		this.published = isPublished;
	}

}
