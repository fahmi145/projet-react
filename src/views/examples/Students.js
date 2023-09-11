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

// reactstrap components
import {
 Modal,  ModalHeader, ModalBody, ModalFooter,
 ListGroup,ListGroupItem,
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
 import { useHistory, useLocation, Route, Switch, Redirect } from "react-router-dom";


//import {useNavigate} from 'react-router-dom';



export   class MyComponent extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
    user : JSON.parse(localStorage.getItem('user')),
    activeSection: [true, false,false],
    level:"1",
    courseCode:"",
    themeCourse:"",
    adminAccount:false,
    addTutorialModal:false,
    selectedTutorial:null,
    updating:false,
    tutorials : [],
    courses:[{"title":"Terminal","level":"4"},{"title":"Primaire","level":"3"}],
    themesCourse:[]
  };

//this.history = callHistory();
	this.loadTutorial=this.loadTutorial.bind(this);
	this.addTutorialModal=this.addTutorialModal.bind(this);
	this.toggleAddTutorialModal=this.toggleAddTutorialModal.bind(this);
  this.getThemeTutorials=this.getThemeTutorials.bind(this);
  this.getThemes=this.getThemes.bind(this);
  this.activateAccount=this.activateAccount.bind(this);
  this.disactivateAccount=this.disactivateAccount.bind(this);
  this.getStudents=this.getStudents.bind(this);

}

async componentDidMount() {
  //alert(JSON.stringify(this.state.user))
  const evtSource = new EventSource("https://monbacmission.com/sse.php?usersession="+this.state.user["usersession"], { withCredentials: true } );

  evtSource.onmessage = (event) => {
    console.log("message: ");
    console.log(event.data);
    if(event.data == "disconnected" ){
      //localStorage.removeItem('user');
       this.props.history.push('/user/index');
       evtSource.close();
       setTimeout(()=>{
         alert("MonBacMission Vous Autorise à une seul et unique session à la fois, Merci!")
        }, 500);
    }
  }



  if(this.state.user["email"] == "contact@monbacmission.com"){
    localStorage.setItem('admin', "true");
    this.setState({
        adminAccount: true,
    });
  }

  this.getStudents(this.state.user["level"], "noFilter");

  /*const formData = new FormData();
   formData.append('data',JSON.stringify({"level":this.state.user["level"]}));
   formData.append('action', "getLevel");
//alert(email+"  "+password)
   fetch('https://monbacmission.com/userAction.php'+"?date="+Date.now(), {
     method: 'POST',
     headers: {
//	   'Content-Type': 'multipart/form-data',
     },
     body: formData
     }).then(response => response.json())
       .then(response => {
         console.log("\n initDashborad response!!  "+JSON.stringify(response) );
         if(response.length > 0){
           const cousesList = JSON.parse(response[0]["course"]);
           this.setState({
               courseCode: cousesList[0]["courseCode"],
               courses: cousesList,
           });
           this.getThemes(cousesList[0]["courseCode"]);
         }
       }) */
}



async getThemes(level){
  this.getStudents(level, level);

  /*this.state.courseCode = courseCode;
  const formData = new FormData();
   formData.append('data',JSON.stringify({"level":this.state.user["level"], "courseCode":courseCode}));
   formData.append('action', "getThemes");
//alert(email+"  "+password)
   fetch('https://monbacmission.com/userAction.php'+"?date="+Date.now(), {
     method: 'POST',
     headers: {
//	   'Content-Type': 'multipart/form-data',
     },
     body: formData
     }).then(response => response.json())
       .then(response => {
         console.log("\n initDashborad response!!  "+JSON.stringify(response) );

           this.setState({
               themesCourse: response,
               themeCourse: response[0]["id"]
           });

       })
  */
}

async getThemeTutorials(e){
  //alert(this.state.courseCode+", "+e.target.getAttribute("data"))
  let themeCourse = e.target.getAttribute("data");
  this.state.activeSection.forEach((item, i) => {
   this.state.activeSection[i] = false;
  });
  let rank = parseInt(e.target.value.split(".")[0]) - 1;
  //alert(rank+" ##  "+e.target.value)
  this.state.activeSection[rank] = true;
  this.getTutorials(this.state.courseCode, themeCourse);
  this.setState({
      themeCourse: themeCourse,
  });

}
async getStudents(level, themeId){
   //alert(courseCode+", "+themeId);
  this.state.courseCode = themeId;
  const formData = new FormData();
   formData.append('data',JSON.stringify({"level":level,"themeId":themeId}));
   formData.append('action', "getStudents");
//alert(email+"  "+password)
   fetch('https://monbacmission.com/userAction.php'+"?date="+Date.now(), {
     method: 'POST',
     headers: {
//	   'Content-Type': 'multipart/form-data',
     },
     body: formData
     }).then(response => response.json())
       .then(response => {
         console.log("\n initDashborad response!!  "+JSON.stringify(response) );
           this.setState({
               tutorials: response,
           });
       })
}


   async loadTutorial(e){

//alert("loadTutorial: "+e.target.getAttribute("data"))
      this.setState({
        selectedTutorial: JSON.parse(e.target.getAttribute("data"))
      });
      localStorage.setItem('tutorial', e.target.getAttribute("data"));
       this.props.history.push('/admin/tutorial')

   }

   async disactivateAccount(e){
     if(window.confirm("This student will be disactivated") == true){
    const formData = new FormData();
     formData.append('data',JSON.stringify({"id":e.target.getAttribute("data")}));
     formData.append('action', "disactivateAccount");
  //alert(email+"  "+password)
     fetch('https://monbacmission.com/userAction.php'+"?date="+Date.now(), {
       method: 'POST',
       headers: {
  //	   'Content-Type': 'multipart/form-data',
       },
       body: formData
       }).then(response => response.json())
         .then(response => {
           console.log("\n initDashborad response!!  "+JSON.stringify(response) );
         })
    }
   }

   async activateAccount(e){
     if(window.confirm("This student will be activated") == true){
       const formData = new FormData();
        formData.append('data',JSON.stringify({"id":e.target.getAttribute("data")}));
        formData.append('action', "activateAccount");
     //alert(email+"  "+password)
        fetch('https://monbacmission.com/userAction.php'+"?date="+Date.now(), {
          method: 'POST',
          headers: {
     //	   'Content-Type': 'multipart/form-data',
          },
          body: formData
          }).then(response => response.json())
            .then(response => {
              console.log("\n initDashborad response!!  "+JSON.stringify(response) );
            })
    }
   }


   async addTutorialModal(e){
       let data = {};
       if(this.state.updating){
         data = this.state.selectedTutorial;
         data["level"]= this.state.user["level"];
      	 data["courseCode"]= this.state.courseCode;
         data["themeId"]= this.state.themeCourse;
         data["title"]= this.title.value;
         data["description"]= this.description.value;
         data["number"]= this.number.value;

       }else{

         data["level"]= this.state.user["level"];
      	 data["courseCode"]= this.state.courseCode;
         data["themeId"]= this.state.themeCourse;
         data["title"]= this.title.value;
         data["description"]= this.description.value;
         data["number"]= this.number.value;

         this.state.tutorials.push(data);
       }

         const formData = new FormData();
          formData.append('data',JSON.stringify(data));
          formData.append('action', "addTutorial");
    //  alert(JSON.stringify(data));
          fetch('https://monbacmission.com/userAction.php'+"?date="+Date.now(), {
            method: 'POST',
            headers: {
       //	   'Content-Type': 'multipart/form-data',
            },
            body: formData
            }).then(response => response.json())
              .then(response => {
                console.log("\n initDashborad response!!  "+JSON.stringify(response) );

              })
        this.toggleAddTutorialModal();
   }

  async toggleAddTutorialModal(){
  	this.setState({
      	        addTutorialModal: !this.state.addTutorialModal,
  	});
   }

  render() {

    let srcImage = require("../../assets/img/images/tutorial.webp"); //.default;

    let courseList = this.state.courses.map((prop, key) => {
      return (
            <option key={key} value={prop["level"]} >{prop["title"]}</option>
       );
     });

     /*let themeCourseList = this.state.themesCourse.map((prop, key) => {
       return (
             <option key={key} value={prop["id"]} >{prop["title"]}</option>
        );
      });*/

     let tutorialsList = this.state.tutorials.map((prop, key) => {
       return (
         <div className="card"  key={key} >
           <img src={srcImage} className="card__img" />
           <div className="card__body">
             <h2 className="card__title">{(key+1)+". "+prop["name"]}</h2>
             { (prop.registred == 1) ?               <Button o  className="card__btn"  color="success" outline  >Registred</Button> :
             <Button o  className="card__btn"  color="danger" outline  >Waiting</Button>             }
             {this.state.adminAccount ?
              <>
               <Row>
                         <Button onClick={this.activateAccount} className="my-4" color="primary" type="button"   size="sm" data={prop["id"]} >Activate</Button>
                         <Button onClick={this.disactivateAccount} className="my-4" color="primary" type="button"   size="sm" data={prop["id"]} >Disactivate</Button>
             </Row>
             </> : null}
           </div>
         </div>
       );


    });


       let themeCourseList = this.state.themesCourse.map((prop, key) => {
         return (
           <ListGroupItem
             action
             tag="button"
             key={key}
             active={this.state.activeSection[key]}

           >
            <Input type="button" data={prop.id} value={(key+1)+'.  '+prop.title}  onClick={this.getThemeTutorials}></Input>

           </ListGroupItem>
          );

      });


	  return (
	    <>
	      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
		<Container fluid>
    <Row>
		<Input type="select" onChange={(e) => this.getThemes(e.target.value)}>
      {courseList}
    </Input>
    </Row>

    <Row>
        <Col className="order-xl-2 mb-5 mb-xl-0" >
          <Card className="card-profile shadow">

            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <Row className="align-items-center">
                <h3 className="mb-0">Filter</h3>
            </Row>

            </CardHeader>
            <CardBody className="pt-0 pt-md-4">
   <ListGroup>
     {themeCourseList}
    </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col className="order-xl-1" xl="8">
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
                  <h3 className="mb-0">Students</h3>
            </CardHeader>
            <CardBody>
        		 <div className="wrapper">
        		  {tutorialsList}
        		  </div>
             </CardBody>
          </Card>
        </Col>
      </Row>





		</Container>
	      </div>

		  <Modal isOpen={this.state.addTutorialModal} toggle={this.toggleAddTutorialModal}  >
		   <ModalHeader toggle={this.toggleAddTutorialModal}>Tutorial</ModalHeader>
		   <ModalBody>
	 	 <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Tutorial information
                  </h6>
                  <div className="pl-lg-4">

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="title"
                          >
                            Titre
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="title"
                            innerRef={ele => {this.title = ele;}}
                             type="text"
                          />
                        </FormGroup>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="description"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="description"
                            innerRef={ele => {this.description = ele;}}

                             type="textarea"
                          />
                        </FormGroup>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="number"
                          >
                            Ordre
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="number"
                            innerRef={ele => {this.number = ele;}}
                             type="text"
                          />
                        </FormGroup>
                   </div>

                 </Form>

		   </ModalBody>
		   <ModalFooter>
		     <Button color="primary" onClick={this.addTutorialModal}>Update</Button>{' '}
		     <Button color="secondary" onClick={this.toggleAddTutorialModal}>Cancel</Button>
		   </ModalFooter>
		 </Modal>
	    </>
	  );
  }
};

export default function Students(props) {
    let history = useHistory();
    return <MyComponent {...props} history={history} />
}
