import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = (props) => {

    const recipe = props.data;

    return (
        <>
            <div className="col-6 col-md-4 p-2">
                <div className="p-3 rounded text-start" style={{ backgroundColor: "rgb(242, 181, 123)"}}>
                    <img src={ recipe.image ?? ('https://via.placeholder.com/400x250?text='+recipe.name.replace(/ /g,"+")) } className="rounded" width={'100%'} height={"300"}/>
                    <h2 className="mt-3">{recipe.name}</h2>
                    {recipe.description ? 
                    <p>{recipe.description.length > 300 ? recipe.description.substring(0, 300) + "...See More" : recipe.description }</p>
                    : <p className="text-secondary">No Description Available</p>}
                    <Link to={"/recipes/"+recipe.id} >
                        <button className="btn btn-outline-dark w-100">View Details</button>
                    </Link>
                </div>
            </div>
        </>
    )
}