import React, { Component } from 'react';
import "../../App.css";
// import browser router.
import { Link } from "react-router-dom";
// import other components.



import "bootstrap/dist/css/bootstrap.css";


export default class UserNavBar extends Component {

  render(props) {
    return (
      <nav>
        <ul className="userNavbar">
          <li className="Ubtn">
            <Link to="/" className="Ulink">
              Quad
                    </Link>
          </li>
          <div className="buttons">
            <li className="Ubtn">
              <Link to="/" className="Ulink">
                Home
                      </Link>
            </li>
            <li className="Ubtn">
              <Link to="/Profile" className="Ulink" >
                Profile
                      </Link>
            </li>
            <li className="Ubtn">
              <Link to="/Aplications" className="Ulink" >
                Aplications
                      </Link>
            </li>
            <li className="Ubtn">
              <Link to="/logout" className="Ulink" >
                Log out
                      </Link>
            </li>
          </div>
        </ul>
      </nav>

    );
  }
}





