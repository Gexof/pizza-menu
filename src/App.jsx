import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">
        <Menu />
      </div>

      <Footer />
    </div>
  );
}

export default App;
