import { useContext } from "react";
import Header from "../components/Header";
import { NotaContext } from "../context/NotaContexts";
import { useNavigate } from "react-router-dom";




function GetStarted() {
  const {lastName, setLastName, firstName, setFirstName} = useContext(NotaContext);
  const navigate = useNavigate();
    
    function handleLogin(e){
      e.preventDefault();
      if(firstName.length >= 2 && lastName.length >= 2)navigate('/appLayout')
        else{return;}
    }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="getStarted-content">
            <p className="page-name gs-title">Get Started</p>
            <div>
              <form onSubmit={(e)=> handleLogin(e)}>
                <p>First Name:</p>
                <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                <p>Last Name:</p>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
