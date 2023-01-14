import React from "react";
import axios from "axios";
import config from "../../config/config";

export const RecipeCreateUpdate = ({ method, url, data = [], title, onSubmit }) => {

    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [ingredients, setIngredients] = React.useState("");
    const [servings, setServings] = React.useState(2);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(config.BASE_URL + '/recipe/store', {
            name,
            image,
            description,
            ingredients,
            servings
        })
            .then(res => {

            }).finally(() => {
                onSubmit()
            });
    }

    return (
        <>
            <div className="bg-light p-3">
                <h1>{title}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6 form-group text-start mb-3">
                            <label>Recipe Name</label>
                            <input name="name" value={name} type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="col-sm-6 form-group text-start mb-3">
                            <label>Recipe Image</label>
                            <input name="image" value={image} type="text" className="form-control" onChange={(e) => setImage(e.target.value)} />
                        </div>


                        <div className="form-group col-sm-6 text-start mb-3">
                            <label>Recipe Description</label>
                            <textarea name="description" value={description} className="form-control" onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className="form-group col-sm-6 text-start mb-3">
                            <label>Recipe Ingredients</label>
                            <textarea name="ingredients" value={ingredients} className="form-control" onChange={(e) => setIngredients(e.target.value)} />
                        </div>


                        <div className="form-group col-sm-6 text-start mb-3">
                            <label>Recipe Servings</label>
                            <input name="servings" type="number" value={servings} className="form-control" onChange={(e) => setServings(e.target.value)} />
                        </div>

                    </div>

                    <div class="mt-3">
                        <button class="w-100 btn btn-lg btn-dark" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}