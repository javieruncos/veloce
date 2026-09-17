import Header from "./components/layout/Header";
import DesignDetails from "./components/sections/DesignDetails";
import FeaturedModel from "./components/sections/FeaturedModel";
import Hero from "./components/sections/Hero";
import ModelCollection from "./components/sections/ModelCollection";
import Personalization from "./components/sections/Personalization";
import PrivateViewing from "./components/sections/PrivateViewing";
import Technology from "./components/sections/Technology";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ModelCollection />
        <FeaturedModel />
        <DesignDetails />
        <Technology />
        <Personalization />
        <PrivateViewing />
      </main>
    </>
  );
}

export default App;
