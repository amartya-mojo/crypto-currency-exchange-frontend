import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import appBackground from "./assests/app-background.jpg";

function App() {
  return (
    <div
      className="flex flex-col h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${appBackground})` }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
