import Card from "./components/Card";
import Hero from "./components/Hero";
import Nav_barr from "./components/Nav_barr";

function App() {
  // console.log(Man);
  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
          <Nav_barr />
        </div>
        <div className="flex-grow">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
