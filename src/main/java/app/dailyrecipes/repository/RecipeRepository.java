package app.dailyrecipes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import app.dailyrecipes.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long>{

    List<Recipe> findByPublished(boolean published);

    List<Recipe> findByPublishedAndNameContaining(boolean published, String search);

    List<Recipe> findByNameContaining(String name);
}
