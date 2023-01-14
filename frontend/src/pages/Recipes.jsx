import React from "react";
import Meta from "../components/Meta";
import config from "../config/config";
import axios from "axios";
import { RecipeCard } from "./recipe/RecipeCard";

export const Recipes = () => {
    // page content
    const pageTitle = 'Recipes'
    const pageDescription = ''

    const [recipes, setRecipes] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [search, setSearch] = React.useState('');

    const fetchRecipes = (searchQ = "") => {
        setLoading(true);
        axios.get(config.BASE_URL + '/recipe/published?search='+searchQ)
            .then(res => {
                setRecipes(res.data);
            }).finally(() => {
                setLoading(false)
            });
    }

    const fetchCategories = () => {
        setLoading(true);
        axios.get(config.BASE_URL + '/category/data')
            .then(res => {
                setCategories(res.data);
            }).finally(() => {
                setLoading(false)
            });
    }

    React.useEffect(() => {
        fetchCategories();
        fetchRecipes();
    }, []);

    const searchRecipes = () => {
        fetchRecipes(search);
    }

    return (
        <>
            <Meta title={pageTitle} />

            <div className="container text-center mb-5">
                <h1>Recipe Book</h1>
                <div className="row my-5 justify-content-md-center">
                    <div className="col-md-4">
                        <input name="search" type="text" className="form-control" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <div className="col-md-3 d-none">
                        <select name="category_id" className="form-select" defaultValue="" placeholder="Categories">
                            <option value="">All Categories</option>
                            <option value="1">All 1</option>
                           {categories.map((category) =>
                                <option value={category.id} key={"catOption"+category.id}>{category.name}</option>
                           )} 
                        </select>
                    </div>
                    <div className="col-md-2 d-none">
                        <input name="servings" className="form-control" placeholder="No. of servings" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary w-100" onClick={() => searchRecipes()}>Search</button>
                    </div>
                </div>
                <div className="row">
                    {loading
                        ?
                        <h1>Loading</h1>
                        :
                        recipes.map((recipe) =>
                            <RecipeCard data={recipe} key={'recipeCard#'+recipe.id}  />
                        )
                    }
                </div>
            </div>
        </>
    )
}