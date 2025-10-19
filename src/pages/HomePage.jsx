import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext } from "react";
import { NotaContext } from "../context/NotaContexts";
import { useNavigate } from "react-router-dom";
// import HomeContent from "../components/HomeContent";

function HomePage() {
  // const {firstName, lastName} = useContext(NotaContext);
  const navigate = useNavigate();

  function getStarted(){

   
      navigate('/appLayout')

  }
  return (
    <div className="home-page">
      <Header />
      <main className="container ">
        <div className="home-content">
          <h1>
            Are you tired of juggling multiple <span>tasks?</span>
          </h1>
          <p>
            Our To-Do list app is here to simplify your life and boost your
            productivity by 10x. We've got you covered.
          </p>
          <div>
            
              <button onClick={getStarted}>Get Started</button>
      
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
