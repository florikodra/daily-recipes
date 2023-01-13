package app.dailyrecipes.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

import app.dailyrecipes.repository.CategoryRepository;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    
    @Autowired
    CategoryRepository categoryRepository;

    
}
