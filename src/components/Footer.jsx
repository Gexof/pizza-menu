const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="mt-16 bg-stone-900 px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          {isOpen ? (
            <>
              <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <p className="text-sm font-bold text-green-400">We're open!</p>
              </div>

              <p className="text-sm leading-6 text-stone-300">
                We're open until {closeHour}:00. Come visit us or order online.
              </p>
            </>
          ) : (
            <>
              <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <p className="text-sm font-bold text-red-400">
                  We're currently closed
                </p>
              </div>

              <p className="text-sm leading-6 text-stone-300">
                We're happy to welcome you between {openHour}:00 and {closeHour}
                :00.
              </p>
            </>
          )}
        </div>

        {isOpen && (
          <button
            type="button"
            className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-stone-900"
          >
            Order Now <span aria-hidden="true">→</span>
          </button>
        )}
      </div>

      <div className="mx-auto mt-7 max-w-7xl border-t border-stone-700 pt-5 text-center">
        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} Fast React Pizza Co. Made with love 🍕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
