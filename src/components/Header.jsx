const Header = () => {
  return (
    <header className="border-b border-stone-200/80 bg-[#faf7f2]">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-7 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label="Pizza">
            🍕
          </span>

          <div className="text-center">
            <h1 className="text-xl font-black uppercase tracking-[0.12em] text-stone-900 sm:text-2xl">
              Fast React
              <span className="ml-2 text-red-600">Pizza Co.</span>
            </h1>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500 sm:text-xs">
              Authentic taste, made fresh
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
