import React, { useState } from "react";
import { useHistory, useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";


// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import SlideShow from "components/Headers/SlideShow";
import AuthFooter from "components/Footers/AuthFooter.js";
import Formations from "views/examples/Formations";
import { Link } from 'react-router-dom';


import routes from "routes.js";
import {
  Button,Input,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,

} from "reactstrap";
import classnames from "classnames";

const User = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  let history = useHistory();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);


const subscribe = (e) => {
  history.push('/auth/register')

};
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");



  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  return (
  <>
      <div className="main-content" ref={mainContent}>
      
      <Formations/>



  <div className="header bg-gradient-info py-7 py-lg-8">



<div className="separator separator-bottom separator-skew zindex-100">

<svg
xmlns="http://www.w3.org/2000/svg"
preserveAspectRatio="none"
version="1.1"
viewBox="0 0 2560 100"
x="0"
y="0"
>
<polygon
className="fill-default"
points="2560 0 2560 100 0 100"
/>
</svg>
</div>
</div>


<AuthFooter />


    
    </div>
    </>
  );
};

export default User;
