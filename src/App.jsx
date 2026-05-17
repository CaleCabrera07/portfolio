import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, About, Works, Contact, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas />
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
