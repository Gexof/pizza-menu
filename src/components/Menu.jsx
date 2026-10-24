import Pizza from "./Pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      {/* Menu Header */}
      <header className="mb-10 text-center">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-red-600">
          Fresh from our oven
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
          Our Menu
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-stone-500 sm:text-base">
          Authentic Italian flavors, fresh ingredients, and a little slice of
          happiness in every bite.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-red-600" />
      </header>

      {/* Pizza Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photo={`/${pizza.photoName}`}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </section>

      {/* Menu Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm font-medium text-stone-500">
          Made with love, served fresh every day.
        </p>
      </footer>
    </main>
  );
};

export default Menu;
