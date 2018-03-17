import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ResultTable extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
      return (
        <div className="resultTable">
          <h1 style={{ textAlign: 'center' }}>Result</h1>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>{'Principal ($)'}</th>
                <th>{'Rate Of Interest (%)'}</th>
                <th>{'Time (years)'}</th>
                <th>{'Interest ($)'}</th>
                <th>{'Total Amount ($)'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.principal}</td>
                <td>{this.props.rateOfInterest}</td>
                <td>{this.props.time}</td>
                <td>{this.props.interest}</td>
                <td>{this.props.total}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
  }
}

export default ResultTable;