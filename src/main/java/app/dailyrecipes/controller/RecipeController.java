package app.dailyrecipes.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.dailyrecipes.model.Recipe;
import app.dailyrecipes.repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/recipe")
public class RecipeController {

    @Autowired
	RecipeRepository recipeRepository;

    @GetMapping("/data")
    public ResponseEntity<List<Recipe>> getAllRecipes() {
		List<Recipe> recipes = new ArrayList<Recipe>();
        recipeRepository.findAll().forEach(recipes::add);
		return new ResponseEntity<>(recipes, HttpStatus.OK);
	}

    @GetMapping("/published")
	public ResponseEntity<List<Recipe>> findByPublished(@RequestParam("search") String search) {
		try {
            
			List<Recipe> recipes = recipeRepository.findByPublishedAndNameContaining(true, search);

			if (recipes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(recipes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable("id") long id) {
		Optional<Recipe> recipeData = recipeRepository.findById(id);

		if (recipeData.isPresent()) {
			return new ResponseEntity<>(recipeData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

    @PostMapping("/store")
	public ResponseEntity<Recipe> createTutorial(@RequestBody Recipe recipe) {
		try {

			Recipe _recipe = new Recipe(
                recipe.getImage(),
                recipe.getName(),
                recipe.getDescription(),
                recipe.getServings(),
                recipe.getIngredients(),
                true
            );
            
            Recipe createdRecipe = recipeRepository.save(_recipe);

			return new ResponseEntity<>(createdRecipe, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    @DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteRecipe(@PathVariable("id") long id) {
		try {
			recipeRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
