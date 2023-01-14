import React from "react";

export const RecipesTable = ({ recipes, deleteRecipe }) => {
    return (
        <><div className="bg-light p-3">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Ingredients</th>
                        <th>Servings</th>
                        <th>Published</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) =>
                    <tr key={"recipeTable#"+recipe.id}>
                        <td>{recipe.id}</td>
                        <td><img src={recipe.image ?? ('https://via.placeholder.com/400x250?text='+recipe.name)}  width={60}/></td>
                        <td>{recipe.name}</td>
                        <td>{recipe.description}</td>
                        <td>{recipe.ingredients}</td>
                        <td>{recipe.servings}</td>
                        <td>{recipe.published ? 'Yes' : 'No'}</td>
                        <td>
                            <button className="btn btn-warning me-2">Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                            
                            </td>
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
        </>
    );

}