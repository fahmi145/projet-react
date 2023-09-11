/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

//import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import UserLayout from "layouts/User.js";
import CustomLayout from "layouts/Custom.js";
import FormationsLayout  from "views/examples/Formations";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

/*//const root = createRoot(document.getElementById("root"));
//let lzScript = require("../../lib/lz-string.js");
const script3 = document.createElement("script");  //npm install  lz-string
script3.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js";
script3.async = true;
document.body.appendChild(script3);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Switch>
     <Route path="/user" render={(props) => <UserLayout {...props} />} />
     <Route path="/custom" render={(props) => <CustomLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/user/index" />
    </Switch>
  </BrowserRouter>
,);


 