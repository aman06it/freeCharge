import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ApiCall from '../common/API/ApiCall'
import urlMapping from '../common/API/Api'

function Home() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        ApiCall(urlMapping.getData(), (response) => {
            setRecipes(response)
        })
    }, [])


    return (
        <div className="container">
            <div className="text-center">
                <h3>Recipes</h3>
            </div>
            <div className="row justify-content-between">
                {recipes.map((items) => {
                    return <div key={items.id} onClick={()=>localStorage.setItem('item',JSON.stringify(items))} className="col-md-3 card m-2">
                        <Link to="/checkout">
                        <img src={items.image} alt="Avatar" className="imgClass" />
                        <div className="container">
                            <h4><b>{items.name}</b></h4>
                            <h4><b>${items.price}</b></h4>
                            <p>{items.description}</p>
                        </div>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home
