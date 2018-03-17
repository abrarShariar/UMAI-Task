import React, { Component } from 'react';
import { Button, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Alert } from 'react-bootstrap';

class SimpleInterest extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.generateResult = this.generateResult.bind(this);
    this.validationCheck = this.validationCheck.bind(this);
    
    this.state = {
      principal: '',
      rateOfInterest: '',
      time: '',
      principalValid: null,
      rateOfInterestValid: null,
      timeValid: null,
      errorMsgList: [{
        key: 'principal',
        value: 'Please Enter A Valid Principal In $'
      },
      {
        key: 'rateOfInterest',
        value: 'Please Enter A Valid Rate Of Interest In %'
      },
      {
        key: 'time',
        value: 'Please Enter A Valid Time In Year'
      }],
      showErrorMsg: false
    };
  }
    
  handleChange(e) {
   this.setState({ [e.target.name]: e.target.value });
   if(e.target.name === 'principal'){
     this.getValidationStatePrincipal();
   } else if(e.target.name === 'rateOfInterest') {
     this.getValidationStateRateOfInterest();
   } else if (e.target.name === 'time'){
     this.getValidationStateTime();
   }
 }
  
  getValidationStatePrincipal() {
    const length = this.state.principal.length;
    if(length <= 0 || this.state.principal === 0 || this.state.principal === '') {
      this.setState({
        principalValid: 'error'
      });
    }
    else {
      this.setState({
        principalValid: 'success'
      });
    }
  }
  
  getValidationStateRateOfInterest() {
    const length = this.state.rateOfInterest.length;
    if(length <= 0 || this.state.rateOfInterest === 0) {
      this.setState({
        rateOfInterestValid: 'error'
      });
    }
    else if (this.state.rateOfInterest > 100) {
      this.setState({
        rateOfInterestValid: 'warning'
      });
    }
    else {
      this.setState({
        rateOfInterestValid: 'success'
      });
    }
  }
  
  getValidationStateTime() {
    const length = this.state.time.length;
    if(length <= 0 || this.state.time === 0 || this.state.time === '') {
      this.setState({
        timeValid: 'error'
      });
    }
    else {
      this.setState({
        timeValid: 'success'
      });
    }
  }
  
  //calculate simple interest and generate result
  generateResult() {
    console.log(this.state);
  }

  validationCheck() {
    if(this.state.principal === 'error' || !this.state.principal || this.state.rateOfInterestValid === 'error' || !this.state.rateOfInterestValid || this.state.timeValid === 'error' || !this.state.timeValid){
      this.setState({
        showErrorMsg: true
      });
    }    
  }
  
  render() {
    
    return (
      <Grid>
        <h1 style={{ textAlign: 'center' }}>Simple Interest</h1>
        <br />
        {this.state.showErrorMsg ? (
          this.state.principal === '' || this.state.principalValid === 'error' ? (
            <Alert bsStyle="danger">
              {this.state.errorMsgList.filter(msg => msg.key === 'principal').map(x => x.value)[0]}
            </Alert>
          ): null 
        ): null}
        
        {this.state.showErrorMsg ? (
          this.state.rateOfInterest === '' || this.state.rateOfInterestValid === 'error' ? (
            <Alert bsStyle="danger">
              {this.state.errorMsgList.filter(msg => msg.key === 'rateOfInterest').map(x => x.value)[0]}
            </Alert>
          ): null 
        ): null}
        
        {this.state.showErrorMsg ? (
          this.state.time === '' || this.state.principalValid === 'error' ? (
            <Alert bsStyle="danger">
              {this.state.errorMsgList.filter(msg => msg.key === 'time').map(x => x.value)[0]}
            </Alert>
          ): null 
        ): null}
        
        <Form horizontal>
          <FormGroup
            validationState={this.state.principalValid}
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
            validationState={this.state.rateOfInterestValid}
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
            validationState={this.state.timeValid}
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
              <Button bsStyle="primary" type="button" onClick={this.validationCheck}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>  
    );
  }
};

export default SimpleInterest;