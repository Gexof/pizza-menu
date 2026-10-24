const Pizza = ({ name, ingredients, price, photo, soldOut }) => {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-stone-200/80 bg-white transition-all duration-300 ${
        soldOut
          ? "opacity-65"
          : "hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5"
      }`}
    >
      <div className="relative overflow-hidden bg-stone-100">
        <img
          src={photo}
          alt={name}
          className={`h-56 w-full object-cover transition-transform duration-500 ${
            soldOut ? "grayscale" : "group-hover:scale-105"
          }`}
        />

        {soldOut && (
          <span className="absolute right-3 top-3 rounded-full bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white">
            Sold Out
          </span>
        )}
      </div>

      <div className="flex min-h-40 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold tracking-tight text-stone-900">
            {name}
          </h2>

          <span className="shrink-0 rounded-lg bg-red-50 px-3 py-1.5 text-base font-bold text-red-600">
            ${price}
          </span>
        </div>

        <p className="text-sm leading-6 text-stone-500">{ingredients}</p>
      </div>
    </article>
  );
};

export default Pizza;
