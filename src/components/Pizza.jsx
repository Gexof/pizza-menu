const Pizza = ({ name, ingredients, price, photo }) => {
  return (
    <div>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <span>{price}</span>
    </div>
  );
};

export default Pizza;
