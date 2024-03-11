import React from "react";

function Card(props) {
  // console.log(props);
  const title = props.title;
  const description = props.description;

  // const { a, b } = props;

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
