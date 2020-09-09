import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: "",
      vinValues: {},
      hasVin: false
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const vin = this.state.vin;
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${vin}?format=json`)
    .then(res => {
      console.log(res);
      console.log(res.data.Results[0]);
      let newData = res.data.Results[0];
      this.setState({...this.state, vinValues: newData, hasVin: true}, function() {
        console.log(this.state.vinValues);
      });
    })
  }
  
  render() {
    const {heading} = this.props;
    // let vinValues = this.state.vinValues.map((key, value) => (<li key="{value}">{value}</li>));
    const vinValues = [];
    let idx = 0;
    for (let val in this.state.vinValues) {
      if (this.state.vinValues[val] && this.state.vinValues[val] !== "Not Applicable" && !val.startsWith("Error")) {
        vinValues.push(
          <tr key={idx}>
            <td>{val}</td>
            <td>{this.state.vinValues[val]}</td>
          </tr>
        )
        idx++;
      }
    };

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <h2>{heading}</h2>
            <form className="form-vin" onSubmit={this.handleSubmit}>
              <label htmlFor="vin">Enter a VIN Number:</label>
              <input 
                className="form-control" 
                id="vin" 
                name="vin" 
                onChange={this.handleChange} />
              <button 
                type="submit"
                className="btn btn-primary btn-block btn-lg btn-vin">
                  Decode VIN
              </button>
            </form>
          </div>
          <div className="col-md-8">
            { this.state.hasVin &&
                <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {vinValues}
                </tbody>              
                </Table>
              }
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;