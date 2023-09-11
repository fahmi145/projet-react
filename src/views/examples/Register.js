import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";


const Register = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      level: '4',
      email: '',
      password: '',
      name: '',
      surname: '',
      emailValidation: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      postcode: '',
    }
  });

  let history = useHistory();
  const onSubmit = async (data) => {
    const { level, ...formData } = data;
    if (level === "Formateur") {
      try {
        // Effectuez l'action de sauvegarde en utilisant une requête API
          await axios.post("https://localhost:8080/api/Formateur", formData);
        console.log("Coordonnées de l'utilisateur formateur sauvegardées :", formData);
        // Vous pouvez également afficher un message de succès ou rediriger l'utilisateur vers une nouvelle page
        history.push("/auth/login");
      } catch (error) {
        console.error("Erreur lors de la sauvegarde :", error);
        // Gérez toute erreur survenue lors de l'action de sauvegarde
        // Vous pouvez afficher un message d'erreur ou effectuer toutes les actions nécessaires
      }
    }
    // Effectuez d'autres actions en fonction de l'option choisie
  };
  const subscribe = (data) => {
    
    fetch('http://localhost:8080/api/Cours/postRequest', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(response => {
        console.log('Réponse:', response);
        if (response.status === 'OK') {
          history.push('/auth/login');
        } else {
          alert(response.description);
        }
      })
      .catch(error => {
        console.log('Erreur:', error);
      });
    

    
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
      <Form onSubmit={handleSubmit(onSubmit)} >
        <h6 className="heading-small text-muted mb-4">
          Mon compte
        </h6>
        <div className="pl-lg-4">
          <Row>
          <Col lg="12">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="input-level"
              >
                Type D'utilisateur
              </label>

              <Controller
                name="level"
                control={control}
                render={({ field }) =>
                <Input id="input-level" name="input-level" type="select" {...field}  >
                
                  <option>Formateur</option>
                  <option>Apprenant</option>
                </Input>
                }
              />
            </FormGroup>
          </Col>
            <Col lg="6">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-email"
                >
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) =>
                  <Input
                    className="form-control-alternative" {...field}
                    id="inputEmail"
                    placeholder=""
                    type="email"
                  />
                  }
                />

              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-username"
                >
                  Mot de passe
                </label>

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) =>
                  <Input
                    className="form-control-alternative" {...field}
                    id="input-password"
                    placeholder=""
                    type="password"
                  />
                  }
                />

              </FormGroup>
            </Col>
          </Row>
        </div>
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
          <Row>
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
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="input-country"
              >
                Téléphone
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) =>
                <Input
                  className="form-control-alternative" {...field}
                  id="input-postal-code"
                  placeholder=""
                  type="txt"
                />
                }
              />
            </FormGroup>
          </Col>
            <Col md="12">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-address"
                >
                  Adresse
                </label>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) =>
                  <Input
                    className="form-control-alternative" {...field}
                    defaultValue=""
                    id="input-address"
                    placeholder=""
                    type="text"
                  />
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-city"
                >
                  Ville
                </label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) =>
                  <Input
                    className="form-control-alternative"  {...field}
                    defaultValue=""
                    id="input-city"
                    placeholder=""
                    type="text"
                  />
                  }
                />
              </FormGroup>
            </Col>
            <Col lg="4">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-country"
                >
                  Pays
                </label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) =>
                  <Input
                    className="form-control-alternative" {...field}
                    defaultValue="Tunisie"
                    id="input-country"
                    placeholder="Country"
                    type="text"
                  />
                  }
                />
              </FormGroup>
            </Col>
            <Col lg="4">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-country"
                >
                  Code postal
                </label>
                <Controller
                  name="postcode"
                  control={control}
                  render={({ field }) =>
                  <Input
                    className="form-control-alternative"  {...field}
                    id="input-postal-code"
                    placeholder=""
                    type="text"
                  />
                  }
                />
              </FormGroup>
            </Col>
          </Row>
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
      <Button className="mt-4" color="primary" type ="submit"   onClick={handleSubmit(subscribe)}  >
       Confirmez votre inscription
      </Button>
    </div>

      </Form>
    </CardBody>
  </Card>

    </>
  );
};

export default Register;