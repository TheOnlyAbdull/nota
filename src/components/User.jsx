import { useContext, useEffect, useState } from "react";
import {
  FaArrowRightArrowLeft,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { NotaContext } from "../context/NotaContexts";
import { useNavigate } from "react-router-dom";

function User({setShowSideBar}) {
  const [date, setDate] = useState(new Date());
  const {firstName, setFirstName, setLastName} = useContext(NotaContext)
  const navigate = useNavigate()
  function handleLogOut(){
    navigate('/')
    // setFirstName('');
    // setLastName('')

  }

  useEffect(function () {
    const interval = setInterval(() => {
      setDate(new Date());

      return () => clearInterval(interval);
    }, [1000]);
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();
  const hour = date.getHours();
  console.log(date);
  return (
    <div className="todo-sec-user">
      <div className="sm-nav">
        <span className="nota-arrow" onClick={()=> setShowSideBar(true)}>
          <FaArrowRightArrowLeft />
        </span>
        <span className="sm-nav-logo">NOTA</span>
        <span className="nota-arrow">
          <FaArrowRightFromBracket  onClick={handleLogOut}/>
        </span>
      </div>
      <div className="name-time">
        <h1>
          Good {hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening"}, {firstName} 🤑
        </h1>
        <p>
          It's {dayOfWeek}, {day}, {month}, {year}
        </p>
        {/* <p>I'ts Thursday 25,September 2024</p> */}
      </div>
      <div className="desk-logout" onClick={handleLogOut}>
        <FaArrowRightFromBracket />
      </div>
    </div>
  );
}

export default User;
