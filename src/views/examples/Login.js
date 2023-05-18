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
import {useState} from 'react';
// reactstrap components
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

import { useHistory, useLocation, Route, Switch, Redirect } from "react-router-dom";


const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = () => {
    history.replace('/register-guest')
  }

    const loginAction = (e) => {
    alert("loginAction");
               let  response = {"registred":"1","status":"Ok","usersession":"2ea9bsdf08a735d042829a85353316ed","email":"test@monbacmission.com","level":"4","username":"","surname":"test","name":"User"};
                localStorage.setItem('user', JSON.stringify(response));
               history.push('/admin')

   }


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Authentification</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={event => setPassword(event.target.value)}
                     type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button onClick={loginAction} className="my-4" color="primary" type="button">
                  Login
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Mot de passe oublié?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="http://localhost:3001/auth/register-guest"
              onClick={createAccount}
            >
              <small>Créer un compte</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;