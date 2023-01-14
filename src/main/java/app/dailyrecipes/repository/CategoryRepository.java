package app.dailyrecipes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import app.dailyrecipes.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
