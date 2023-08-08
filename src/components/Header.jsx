const Header = () => {
  return (
      <div className="mt-5 w-full flex flex-col items-center justify-center md:mt-0">
        <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Cripto Market</h1>
        <h2 className="text-md md:text-2xl mt-3">
          Data-<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">cripto</span> al instante 〽️!
        </h2>
      </div>
  );
};

export default Header;
