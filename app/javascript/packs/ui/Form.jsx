// EXPORTED BY THE PACKAGE. DOES NOT BELONG TO USER!!

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from './TextField'
import axios from 'axios'

import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const renderField = (field) => {
  console.log(field)
  // implements redux form for registration
  
  // TODO: render

  if (field.type == 'string') {
    return (
      <TextField
        id={field.input.name}
        label={field.input.name}
        type={field.input.name.toLowerCase() == 'password' ? 'password' : 'text'}
        validationState={field.meta.valid ? 'success' : 'error'}
        {...field.input}
      >
      </TextField>
    )
  
  } else {
    return (
      <FormGroup>
        <ControlLabel>{field.input.name}</ControlLabel>
        <FormControl.Static>
          {field.type} is not implemented
        </FormControl.Static>
      </FormGroup>
    )
  }

};

class Form extends Component {

  constructor() {
    super();
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {modelData: []}

  }
  /**
   * fetch data on the model and set to state
  */
  componentDidMount() {
    let _this = this;
    axios.get(`/model/${this.props.for}`)
         .then(function (response) {
            _this.setState({modelData: response.data.fields})
         })
         .catch(function (error) {
            // render a form-wide error
            console.log(error);
         });

  }

  /**
   * renders each field based on model data
   *
  */
  eachField(field, i) {
    return (

      <div key={i}>
        <Field
          name={field.col_name}

          className="form-control"
          component={renderField}
          type={field.type}
          
        />
      </div>
    )
  }

  render() {
    const {handleSubmit} = this.props;
  
    if (this.state.modelData) {
      return (
        <div>
          <form onSubmit={handleSubmit(this.props.onSubmit)}>
            {this.state.modelData.map(this.eachField)}
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Form