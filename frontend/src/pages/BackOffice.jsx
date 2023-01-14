import React from "react";
import Meta from "../components/Meta";
import config from "../config/config";
import axios from "axios";
import { RecipesTable } from "../components/backoffice/RecipesTable";
import { toast, ToastContainer } from 'react-toastify';
import { RecipeCreateUpdate } from "../components/backoffice/RecipeCreateUpdate";

export const BackOffice = () => {
    // page content
    const pageTitle = 'BackOffice'
    const pageDescription = ''

    const [recipes, setRecipes] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const [formTitle, setFormTitle] = React.useState('Add new Recipe');

    const fetchRecipes = () => {
        setLoading(true);
        axios.get(config.BASE_URL + '/recipe/data')
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
        fetchRecipes();
    }, []);

    const deleteRecipe = (id) => {

        if (window.confirm("Are you sure you want to delete Recipe?")) {
        setLoading(true);
        axios.delete(config.BASE_URL + '/recipe/' + id)
            .then(res => {
                toast.success("Recipe Deleted Successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch(function (error) {
                toast.error("Recipe Deleted FAILED!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .finally(() => {
                setLoading(false);
                fetchRecipes();
            });
        }
    }


    return (
        <>
            <Meta title={pageTitle} />
            <ToastContainer />
            <div className="container text-center mb-5">
                <h1>BackOffice</h1>

                <div className="row">


                <div className="col-md-12 mb-3">
                        <RecipeCreateUpdate title={formTitle} onSubmit={fetchRecipes}/>
                    </div>

                    <div className="col-md-12">



                        {loading
                            ?
                            <h1>Loading</h1>
                            :
                            <RecipesTable recipes={recipes} deleteRecipe={deleteRecipe} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}