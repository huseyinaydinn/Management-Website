import { Header } from "./components/Header";
import './App.css'
import { Home } from "./components/Home";
import { Brands } from "./components/Brands";
import { Features } from "./components/Features";
import { Stories } from "./components/Stories";
import { About } from "./components/About";
import { MobileApp } from "./components/MobileApp";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="App max-w-[1920px] mx-auto relative overflow-hidden">
      <Header />
      <Home />
      <Brands />
      <Features />
      <Stories />
      <About />
      <MobileApp />
      <Footer />
    </div>
  )
}

export default App
