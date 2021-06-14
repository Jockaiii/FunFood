import React from 'react'


export const Recipe = ({title, image, ingredients}) => {
    return (
        <div>
            <h5> {title} </h5>            
            <img src ={image} alt="" />
            <ol>{ingredients.map(ingredient =>(
                <ol>{ingredient.text } </ol>
            ))} </ol>
        
        </div>
    )
}

export default Recipe