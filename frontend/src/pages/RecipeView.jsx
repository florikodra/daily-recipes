import React from "react";
import { useParams } from "react-router-dom";
import config from "../config/config";
import axios from "axios";

export const RecipeView = () => {
    const params = useParams();

    const id = params.id;
    const [recipe, setRecipe] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        setLoading(true);
        axios.get(config.BASE_URL + '/recipe/' + id)
            .then(res => {
                setRecipe(res.data);
                console.log(recipe)
            }).finally(() => {
                setLoading(false)
            });
    }, []);


    console.log(params)
    return(<>
    </>)
}