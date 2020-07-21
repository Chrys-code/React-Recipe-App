import React from "react";

const Recipe = ({ index, title, calories, image, ingredients }) => {
  return (
    <div className="card bg-success p-3 my-3">
      <div className="card-header">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <a
          className="collapsed card-link"
          data-toggle="collapse"
          href={"#collapse" + index}
        >
          {title}
        </a>
      </div>
      <div
        id={"collapse" + index}
        className="collapse"
        data-parent="#accordion"
      >
        <div className="card-footer">
          <p>Calories: &nbsp; {Math.floor(calories)}</p>
          <ol>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
