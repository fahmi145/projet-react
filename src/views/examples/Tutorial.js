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

// reactstrap components
import React from "react";

import {
  Modal,  ModalHeader, ModalBody, ModalFooter,
 ListGroup,ListGroupItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input, Label,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";


import SectionHeader from "components/Headers/TutorialHeader.js";
 





export default  class Section extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      user : JSON.parse(localStorage.getItem('user')),
      file:"",
      fileType:"",
      activeSection: [false, false,false],
      tutorial :JSON.parse(localStorage.getItem('tutorial')),
      sectionContent:"",
      sectionType:"html",
      editorConfig:{
          readonly: false,
          toolbar: true,
          spellcheck: true,
          language: "en",
          toolbarButtonSize: "medium",
          toolbarAdaptive: false,
          showCharsCounter: true,
          showWordsCounter: true,
          showXPathInStatusbar: false,
          askBeforePasteHTML: true,
          askBeforePasteFromWord: true,
          //defaultActionOnPaste: "insert_clear_html",
           uploader: {
            insertImageAsBase64URI: true
          },
          width: 800,
          height: 842
        },
     adminAccount :false,
     sectionConfig: {"tutorialId":"","number": "", "title":"",  "content":"",   "contentType":"",   "type": "html",  "description": "", "date": ""},
  	sections : []
    };

  //this.history = callHistory();
  this.getSections=this.getSections.bind(this);
  	this.loadSection=this.loadSection.bind(this);
    this.selectSection=this.selectSection.bind(this);
    this.updateSection=this.updateSection.bind(this);
  	this.deleteSection=this.deleteSection.bind(this);
  	this.addSection=this.addSection.bind(this);
    this.setSelected=this.setSelected.bind(this);
    this.uploadFile=this.uploadFile.bind(this);
    this.fileServerUpload=this.fileServerUpload.bind(this);
    this.setContent = this.setContent.bind(this);


  }

  async componentDidMount() {
    //alert(JSON.stringify(this.state.user))
    if(localStorage.getItem('admin')){
      this.setState({
          adminAccount: true,
      });
    }

   await this.getSections();
   setTimeout(()=>{
     this.loadSection(0);
    }, 500);
  }

  getSections() {

      const formData = new FormData();
       formData.append('data',JSON.stringify({"tutorialId":this.state.tutorial["id"]}));
       formData.append('action', "getSections");
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
                   sections: response,
               });
           })
  }

addSection() {
  //alert("setContent: "+newContent)
  //sectionConfig: { "tutorialId":"","number": "", "title":"",  "content":"",   "contentType":"",   "type": "html",  "descrription": "", "date": ""},
  this.title.value="";
  this.description.value="";
  this.number.value= "";

  this.setState({
      sectionConfig: { "tutorialId":"","number": "", "title":"",  "content":"",   "contentType":"",   "type": "html",  "description": "", "date": ""},
      sectionContent:"",
      sectionType:"html"
     });
  }

  setContent(newContent) {
    //alert("setContent: "+newContent)
    this.state.sectionContent = newContent;
  }


async updateSection() {

  if(window.confirm("A Section info will be saved") == true){

    if(!this.state.sectionContent){
        alert("Description not updated");
     }else{

  //  if(this.state.sectionType=="file"){
      if(this.state.file != ""){
        await this.fileServerUpload(this.state.file,this.state.fileName, this.state.pathLocation)
        this.state.sectionConfig["content"] = btoa(encodeURIComponent(this.state.pathLocation+"/"+this.state.fileName))
    //  }
    }else{
     this.state.sectionConfig["content"] = btoa(encodeURIComponent(this.state.sectionContent))  // btoa(this.state.descriptionHotspotInfo);
    }

  this.state.sectionConfig["tutorialId"] = this.state.tutorial["id"];
  this.state.sectionConfig["type"] = this.state.sectionType;
  this.state.sectionConfig["title"] = this.title.value;
  this.state.sectionConfig["description"] = this.description.value;
  this.state.sectionConfig["number"] = this.number.value;

 
    }
  }
}

 async fileServerUpload(filedata,fileName, pathLocation) {
     var filetype = filedata["type"];

     const formData = new FormData();
     formData.append('action',"saveFile")
     formData.append('filedata',filedata)
     formData.append('filetype',filetype)
     formData.append('filename',fileName)
     formData.append('pathLocation', pathLocation)

 		console.log(filedata);


 
   }

  uploadFile(e){
         console.log(e.target.files);
     e.preventDefault();
     let courseCode = this.state.tutorial["courseCode"];
     let tutorialId = this.state.tutorial["id"];
     let pathLocation = "/tutorials/"+courseCode+"/"+tutorialId;
     let reader = new FileReader();
     if (e.target.files && e.target.files[0]) {
          let file = e.target.files[0];
          var fileType = file["type"];
          var fileName = file["name"];
          reader.onloadend = () => {
            // this.fileServerUpload(file,fileName, pathLocation);
            pathLocation = pathLocation+"/"+fileName.substr(0, fileName.lastIndexOf("."))
             console.log(pathLocation+"/"+fileName);
            // alert(pathLocation+"/"+fileName);
            this.state.sectionConfig["contentType"] = fileType;
            this.state.sectionConfig["content"] = pathLocation+"/"+fileName;
             this.setState({
                file: file,
                fileName:fileName,
                pathLocation:pathLocation,
                fileType: fileType,
                sectionContent:  URL.createObjectURL(file)
             });
             //ecodeURIComponent(atob(this.state.PDFFile)
          }

          reader.readAsDataURL(file)
     }


  }

  async setSelected(codeType){
          this.setState({
              sectionType: codeType
          });
  }


  async loadSection(rank){
        this.state.activeSection.forEach((item, i) => {
         this.state.activeSection[i] = false;
       });

       this.state.activeSection[rank] = true;
       let sectionSelected = this.state.sections[rank];

      if(sectionSelected && (typeof sectionSelected != "undefined")){
      // alert(JSON.stringify(sectionSelected))

       if(this.state.adminAccount){
         this.title.value = sectionSelected["title"];
         this.description.value = sectionSelected["description"];
         this.number.value = sectionSelected["number"];
       }

       this.setState({
         sectionConfig:"",
         sectionContent:"",
         sectionType :"html"
       });
      // alert(sectionSelected.type+"    "+decodeURIComponent(atob(sectionSelected.content)))
       setTimeout(()=>{
         this.setState({
             sectionConfig:sectionSelected,
             sectionContent: decodeURIComponent(atob(sectionSelected.content)),
             sectionType:sectionSelected.type,
           });
         }, 500);


      }
  }

 async selectSection(e){
   let rank = parseInt(e.target.innerText.split(".")[0]) - 1;
   this.loadSection(rank);
 }


 async deleteSection(e){
  if(window.confirm("A Section "+this.state.sectionConfig["title"]+" will be deleted") == true){

  }
 }



 render() {

   let sectionList = this.state.sections.map((prop, key) => {
     return (
       <ListGroupItem
         action
         active={this.state.activeSection[key]}
         tag="button"
         key={key}
         data="klklk"
         onClick={this.selectSection}
       >
         <Row className="align-items-center"    >
           <Col xs="12">
             <h3 className="mb-0">{(key+1)+'.  '+prop.title}</h3>
           </Col>

         </Row>
       </ListGroupItem>
      );

  });
 


   return (
    <>
      <SectionHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>



          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">

              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Sections</h3>
                </Col>
                <Col className="text-right" xs="4">
                {this.state.adminAccount ?
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={this.addSection}
                    size="sm"
                  >
                    Ajouter
                  </Button> : null }
                </Col>
              </Row>

              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
		 <ListGroup>
		   {sectionList}
		  </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">{this.state.tutorial["title"]}</h3>
                  </Col>
                {this.state.adminAccount ? <>
                  <Col className="text-right" xs="2">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={this.updateSection}
                      size="sm"
                    >
                      Update
                    </Button>
                  </Col>
                  <Col className="text-right" xs="2">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={this.deleteSection}
                      size="sm"
                    >
                      Delete
                    </Button>
                  </Col>
                 </> : null }
                </Row>
              </CardHeader>
              <CardBody>
              {(this.state.adminAccount) ? <>
                <div className="pl-lg-4">
                <FormGroup >
                  <label className="form-control-label" htmlFor="title"  >
                   Title
                  </label>
                  <Input className="form-control-alternative"  id="title" name="title" type="text"   innerRef={ele => {this.title = ele;}}   />
                </FormGroup>
                <FormGroup >
                  <label className="form-control-label" htmlFor="description"  >
                   Description
                  </label>
                  <Input className="form-control-alternative"  id="description" name="description" type="text"  innerRef={ele => {this.description = ele;}}   />
                </FormGroup>
                <FormGroup >
                  <label className="form-control-label" htmlFor="number"  >
                   Number
                  </label>
                  <Input className="form-control-alternative"  id="number" name="number" type="text"  innerRef={ele => {this.number = ele;}}   />
                </FormGroup>
                <Input type="select" onChange={(e) => this.setSelected(e.target.value)}>
                  <option value="html" >Editor</option>
                  <option value="file" >File</option>
                </Input>
               </div>

              {(this.state.sectionType === "file") ?
                 <div> <Label for="File" id="uploadFile"> upload File  </Label>
               <Input type="file" id="File" name={"Sextion1Id"}    onChange={this.uploadFile}   />
                  <div> <video controls style={{"maxWidth": "100%"}} control>   <source type={this.state.fileType}  src={this.state.sectionContent} /> </video> <picture>  <img type={this.state.fileType}  src={this.state.sectionContent} /> </picture> </div>
                
                </div>   :  <div   style={{ maxWidth: this.state.editorConfig.width, margin: "0 auto" }}>
                <JoditEditor
                  innerRef={ele => {this.refEditor = ele;}}
                  value={this.state.sectionContent}
                  config={this.state.editorConfig}
                  onBlur={newContent => this.setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => {}}                />
              </div>
              }
              </>: <>
              {(this.state.sectionType === "file") ? <>
                                  <div> <video controls style={{"maxWidth": "100%"}} control>   <source type={this.state.fileType}  src={this.state.sectionContent} /> </video> <picture>  <img type={this.state.fileType}  src={this.state.sectionContent} /> </picture> </div>
                </>   :  <div dangerouslySetInnerHTML={{ __html: this.state.sectionContent}} /> }
                 </> }

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
 };

}
