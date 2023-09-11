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
    courses:[],
    themesCourse:[]
  };

//this.history = callHistory();
	this.loadTutorial=this.loadTutorial.bind(this);
	this.deleteTutorial=this.deleteTutorial.bind(this);
	this.addTutorialModal=this.addTutorialModal.bind(this);
	this.toggleAddTutorialModal=this.toggleAddTutorialModal.bind(this);
  this.getTutorials=this.getTutorials.bind(this);
  this.getThemeTutorials=this.getThemeTutorials.bind(this);
  this.getThemes=this.getThemes.bind(this);
  this.updateTutorial=this.updateTutorial.bind(this);

}

async componentDidMount() {
  //alert(JSON.stringify(this.state.user))


  let admin = false;
  if(admin){
    localStorage.setItem('admin', "true");
    this.setState({
        adminAccount: true,
    });
  }
  const formData = new FormData();
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
       })
}



async getThemes(courseCode){

  this.state.courseCode = courseCode;
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
        /* const themesList = JSON.parse(response[0]["course"]);
         /*this.setState({
             courseCode: cousesList[0]["courseCode"],
             themesList: themesList,
         });
         */
           this.setState({
               themesCourse: response,
               themeCourse: response[0]["id"]
           });
           this.getTutorials(courseCode, response[0]["id"]);

       })

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
async getTutorials(courseCode, themeId){
   //alert(courseCode+", "+themeId);
  this.state.courseCode = courseCode;
  const formData = new FormData();
   formData.append('data',JSON.stringify({"level":this.state.user["level"], "courseCode":courseCode,"themeId":themeId}));
   formData.append('action', "getTutorials");
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

   async updateTutorial(e){
     this.toggleAddTutorialModal();
     let data = JSON.parse(e.target.getAttribute("data"));

     setTimeout(()=>{
       this.title.value = data["title"];
       this.description.value=data["description"];
       this.number.value = data["number"];
      }, 500);

     this.setState({
       selectedTutorial: data,
       updating:true
     });
   }

   async deleteTutorial(e){
     if(window.confirm("A Tutoial will be deleted") == true){
      
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

        
        this.toggleAddTutorialModal();
   }

  async toggleAddTutorialModal(){
  	this.setState({
      	        addTutorialModal: !this.state.addTutorialModal,
  	});
   }

  render() {

    let srcImage = require("../assets/img/images/tutorial.webp"); //.default;

    let courseList = this.state.courses.map((prop, key) => {
      return (
            <option key={key} value={prop["courseCode"]} >{prop["title"]}</option>
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
             <h2 className="card__title">{(key+1)+". "+prop["title"]}</h2>
             <Button onClick={this.loadTutorial}    className="card__btn"  color="primary" outline  data={JSON.stringify(prop)} >Commencer</Button>
             {this.state.adminAccount ?
              <>
               <Row>
                         <Button onClick={this.updateTutorial} className="my-4" color="primary" type="button"   size="sm" data={JSON.stringify(prop)} >Update</Button>
                         <Button onClick={this.deleteTutorial} className="my-4" color="primary" type="button"   size="sm" data={prop["id"]} >Delete</Button>
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
              <Col xs="8">
                <h3 className="mb-0">Thémes</h3>
              </Col>
              <Col className="text-right" xs="4">
              {this.state.adminAccount ?
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={this.addTheme}
                  size="sm"
                >
                  Ajouter
                </Button> : null }
              </Col>
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
                  <h3 className="mb-0">Chapitres</h3>
                  {this.state.adminAccount ? <Button onClick={this.toggleAddTutorialModal} className="my-4" color="primary" type="button" data="{'name':'math'}" >Ajouter</Button> : null }
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

export default function Index(props) {
    let history = useHistory();
    return <MyComponent {...props} history={history} />
} 