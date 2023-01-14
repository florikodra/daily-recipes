package app.dailyrecipes.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import app.dailyrecipes.model.Category;
import app.dailyrecipes.repository.CategoryRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/category")
public class CategoryController {
    
    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/data")
	public ResponseEntity<List<Category>> findByPublished() {
		List<Category> categories = new ArrayList<Category>();
        categoryRepository.findAll().forEach(categories::add);
		return new ResponseEntity<>(categories, HttpStatus.OK);
	}

    @PostMapping("/store")
	public ResponseEntity<Category> createTutorial(@RequestBody Category category) {
		try {

			Category _category = new Category(
                category.getName(),
                category.getDescription()
            );
            
            Category createdCategory = categoryRepository.save(_category);

			return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
