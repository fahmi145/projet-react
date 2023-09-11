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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
//import Tutorials from "views/examples/Tutorials.js";
import Tutorial from "views/examples/Tutorial.js";
import Students from "views/examples/Students.js";
import RegisterGuest from "views/examples/RegisterGuest";
import Formations from "views/examples/Formations";
import Apprenant from "views/examples/Apprenant";
import Formateur from "views/examples/Formateur";
import SideBar from "views/examples/SideBar"
import SidebarA from "views/examples/SideBarA";
import Tablees from "views/examples/Tablees";
import Exercices from "views/examples/Exercices";
import Cours from "views/examples/Cours";
import Messages from "views/examples/Messages";
import CoursFormateur from "views/examples/CoursFormateur";
import ExercicesFormateur from "views/examples/ExercicesFormateur";
import GererFormations from "views/examples/GererFormations";


var routes = [
  {
    path: "/students",
    name: "Mes Élèves",
    icon: "ni ni-tv-2 text-primary",
    component: Students,
    layout: "/admin"
  },
  {
    path: "/register-guest",
    name: "register-guest",
    icon: "ni ni-tv-2 text-primary",
    component: RegisterGuest,
    layout: "/auth"
  },
  {
    path: "/formations",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Formations,
    layout:"/custom"
  },
 
  {
    path: "/apprenant",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Apprenant,
    layout: "/custom"
  },
  {
    path: "/tablees",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Tablees,
    layout: "/custom"
  },
  {
    path: "/formateur",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Formateur,
    layout: "/custom"
  },
  {
    path: "/exercices",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Exercices,
    layout: "/custom"
  },
  {
    path: "/cours",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Cours,
    layout: "/custom"
  },
  {
    path: "/sidebar",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: SideBar,
    layout: "/custom"
  },
  
  {
    path: "/sidebara",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: SidebarA,
    layout: "/custom"
  },
  {
    path: "/messages",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Messages,
    layout: "/custom"
  },
  {
    path: "/cours-formateur",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: CoursFormateur,
    layout: "/custom"
  },
  {
    path: "/exercices-formateur",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: ExercicesFormateur,
    layout: "/custom"
  },
  {
    path: "/gerer-formations",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: GererFormations,
    layout: "/custom"
  },
  
  
  {
    path: "/index",
    name: "Mes Tutorials",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/tutorial",
    name: "Tutorial en cours",
    icon: "ni ni-single-02 text-yellow",
    component: Tutorial,
    layout: "/admin"
  },
  {
    path: "/media",
    name: "",
    icon: "ni ni-tv-2 text-primary",
    component: Media,
    layout: "/custom"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-circle-08 text-pink",
    component: Profile,
    layout: "/auth"
  },
  
];
export default routes;




