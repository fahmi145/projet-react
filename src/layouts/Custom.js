import React, { useState } from "react";
import { useHistory, useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";


// core components
import SlideShow from "components/Headers/SlideShow.js";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
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

const Custom = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  let history = useHistory();

  // React.useEffect(() => {
  //   document.body.classList.add("bg-default");
  //   return () => {
  //     document.body.classList.remove("bg-default");
  //   };
  // }, []);
  // React.useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   mainContent.current.scrollTop = 0;
  // }, [location])


const subscribe = (e) => {
  history.push('/auth/register')

};
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/custom") {
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

  return <>
  <Switch>
    {getRoutes(routes)}
    <Redirect from="*" to="/auth/login" />
  </Switch>
  </>;
};

export default Custom;
