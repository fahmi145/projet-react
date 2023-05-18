
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
  } from "reactstrap";
  
  import { useForm, Controller } from "react-hook-form";
  import { useRef, } from 'react';
  
  import { useHistory } from "react-router-dom";
  
  const RegisterGuest = () => {
  
    const { control, handleSubmit,getValues } = useForm({
      defaultValues: {
        level: '4',
        email: '',
        name: '',
        surname: '',
        emailValidation: '',
        
      }
    });
  
    let history = useHistory();
   let level = 4;
    const setSelected = (codeType) => {
      level = codeType;
    };
    const handleButtonClick = () => {
       //Exemple de navigation vers une autre page
      history.push('/custom/apprenant');
      
    };
  
      
      
    const onSubmit = (data) => {
      if (data.emailValidation.includes('@gmail.com')) {
        history.replace('custom/formations');
    } else if (data.emailValidation.includes('@educationaldev')) {
        history.replace('custom/apprenant');
      }
    };

  
    const subscribe = (data) => {
    //  alert("data: "+JSON.stringify(data));
      //const values = getValues();
  
      const formData = new FormData();
       formData.append('data',JSON.stringify(data));
       formData.append('action', "RegisterGuest");
  
       fetch('https://monbacmission.com/userAction.php'+"?date="+Date.now(), {
         method: 'POST',
         headers: {
   //   'Content-Type': 'multipart/form-data',
         },
         body: formData
         }).then(response => response.json())
           .then(response => {
             console.log("\n sendPhoneMsg response!!  "+JSON.stringify(response) );
           if(response.status == "Ok"){
             history.push('/auth/RegisterGuest')
           }else{
             alert(response.description);
           }
  
           })
    };
  
  
 
  
  
    return (
      <>
  
         <Card>
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
  
                      <h3 className="mb-0">Inscription</h3>
  
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    
                    
                      
                     
                       
                    
                       
                    
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Mes Contacts
                    </h6>
                    <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Nom
                          </label>
                          <Controller
                            name="name"
                            control={control}
                            render={({ field }) =>
                            <Input
                              className="form-control-alternative" {...field}
                              defaultValue=""
                              id="input-first-name"
                              placeholder=""
                              type="text"
                            />
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Prénom
                          </label>
                          <Controller
                            name="surname"
                            control={control}
                            render={({ field }) =>
                            <Input
                              className="form-control-alternative" {...field}
                              defaultValue=""
                              id="input-last-name"
                              placeholder=""
                              type="text"
                            />
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                      
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <Controller
                            name="emailValidation"
                            control={control}
                            defaultValue=""
                            render={({ field }) =>
                            <Input
                              className="form-control-alternative"   {...field}
                              id="input-email"
                              placeholder=""
                              type="email"

                            />
                            }
                          />
                        </FormGroup>
                      </Col>
                      
                       
                      
                    </div>
                    <hr className="my-4" />
  
  
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          J'accepte {" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            les conditions générales
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                <Button className="mt-4" color="primary"  onClick={handleButtonClick} >
                  Confirmez votre inscription 
                 
                   
                  
                  </Button>
                  
                
                </div>
  
                  </Form>
                </CardBody>
              </Card>
  
      </>
    );
  };
  export default RegisterGuest;