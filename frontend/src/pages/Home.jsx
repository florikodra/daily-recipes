import React from "react";
import Meta from "../components/Meta";
import cooking from '../assets/images/cooking.png';

export const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = ''

  return (
    <div>
      <Meta title={pageTitle}/>

      <div className="row pt-5">
        <div className="col-md-6">
            <img src={cooking} />
        </div>
        <div className="col-md-6">
            <h1>Check Our Daily Recipes </h1>
            <p>Checkout Latest Recipes and the large variety of foods!</p>
        </div>
      </div>
    </div>
  )
}