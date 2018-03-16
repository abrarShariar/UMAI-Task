import React, { Component } from 'react';
import { Button, Grid, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

class SimpleInterest extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      principal: '',
      rateOfInterest: '',
      time: ''
    };
  }
  
  handleChange(e) {
   this.setState({ [e.target.name]: e.target.value });
 }
  
  getValidationStatePrincipal() {
    const length = this.state.principal.length;
    if(length <= 0 || this.state.principal === 0) {
      return 'error';
    }
    else {
      return 'success';
    }
  }
  
  getValidationStateRateOfInterest() {
    const length = this.state.rateOfInterest.length;
    if(length <= 0 || this.state.rateOfInterest === 0) {
      return 'error';
    }
    else if (this.state.rateOfInterest > 100) {
      return 'warning';
    }
    else {
      return 'success';
    }
  }
  
  getValidationStateTime() {
    const length = this.state.time.length;
    if(length <= 0 || this.state.time === 0) {
      return 'error';
    }
    else {
      return 'success';
    }
  }
  
  
  render() {
    return (
      <Grid>
        <h1 style={{ textAlign: 'center' }}>Simple Interest</h1>
        <br />
        <Form horizontal>
        
          <FormGroup
            validationState={this.getValidationStatePrincipal()}
          >
            <Col componentClass={ControlLabel} sm={2}>
              {'Principal'}
            </Col>
            <Col sm={10}>
              <FormControl 
                name="principal"
                type="number" 
                placeholder="principal in $"
                value={this.state.principal}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          
          <FormGroup
            validationState={this.getValidationStateRateOfInterest()}
          >
            <Col componentClass={ControlLabel} sm={2}>
              {'Rate Of Interest'}
            </Col>
            <Col sm={10}>
              <FormControl 
                name="rateOfInterest"
                type="number" 
                placeholder="rate of interest in %" 
                value={this.state.rateOfInterest}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
      
          <FormGroup 
            validationState={this.getValidationStateTime()}
          >
            <Col componentClass={ControlLabel} sm={2}>
              {'Time Period'}
            </Col>
            <Col sm={10}>
              <FormControl 
                name="time"
                type="number" 
                placeholder="time period in years"
                value={this.state.time}
                onChange={this.handleChange}
                 />
            </Col>
          </FormGroup>
          
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <Button bsStyle="primary" type="button">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>  
    );
  }
};

export default SimpleInterest;