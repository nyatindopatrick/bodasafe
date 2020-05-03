import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { useSignUpForm } from '../customHooks';
import axios from 'axios';
import Snackbar from '../Snackbar';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const SaccoRegister = () => {
  const { inputs, handleInputChange } = useSignUpForm(
    handleSignup
  );
  const [message, setMessage] = useState();
  // all callback funcitons should always be defined using the function keywords arrow funciton wont work
  function handleSignup() {
    return axios
      .post('/api/admin/newsacco', inputs)
      .then(res => {
        console.log(res);
        setMessage(res.data);
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      <ReactCSSTransitionGroup
        component='div'
        transitionName='TabsAnimation'
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Card className='main-card mb-3'>
          <CardBody>
            <CardTitle align='center'></CardTitle>
            <Snackbar message={message} />
            <CardTitle align='center'>New Sacco</CardTitle>
            <Form>
              <CardTitle>Sacco Info</CardTitle>
              <hr />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleEmail11'>Name</Label>
                    <Input
                      type='text'
                      name='name'
                      placeholder='Name of sacco'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for='examplePassword11'>Email</Label>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Email'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleCity'>Sacco Code</Label>
                    <Input
                      type='text'
                      name='saccoCode'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Registration Number</Label>
                    <Input
                      type='text'
                      name='registration_number'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleZip'>Location</Label>
                    <Input
                      type='text'
                      name='location'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>Created</Label>
                    <Input
                      type='date'
                      name='created'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for='date_founded'>Date Founded</Label>
                    <Input
                      type='date'
                      name='date_founded'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={5}>
                  <FormGroup>
                    <Label for='exampleZip'>Password</Label>
                    <Input
                      type='password'
                      name='password'
                      onChange={handleInputChange}
                    />
                    <FormText>Must be at least 6 characters.</FormText>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for='exampleCity'>Postal Address</Label>
                    <Input
                      type='text'
                      name='address'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Website</Label>
                    <Input
                      type='text'
                      name='website'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleZip'>Postal Code</Label>
                    <Input
                      type='text'
                      name='postal_code'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>Phone</Label>
                    <Input
                      type='number'
                      name='phone'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for='exampleState'>Status</Label>
                    <Input
                      type='text'
                      name='status'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle>
                <b>Sacco Leader Details</b>
              </CardTitle>
              <hr />
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleCity'>First Name</Label>
                    <Input
                      type='text'
                      name='saccoleaderFname'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleZip'>Last Name</Label>
                    <Input
                      type='text'
                      name='saccoleaderLname'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for='exampleState'>Phone</Label>
                    <Input
                      type='number'
                      name='saccoleaderPhone'
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div className='divider' />
              <Button color='primary' onClick={handleSignup} className='mt-2'>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </ReactCSSTransitionGroup>
    </>
  );
};
export default SaccoRegister;
