// EXPORTED BY THE PACKAGE. DOES NOT BELONG TO USER!!

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from './TextField'
import axios from 'axios'

import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

import validators from '../validators'

const renderField = ({id, 
               label, 
               help, 
               type,
               input,
               meta,
               ...props }) => {

  if (type == 'string') {
    return (
      <TextField
        id={input.name}
        label={input.name}
        type={input.name.toLowerCase() == 'password' ? 'password' : 'text'}
        meta={meta}
        {...input}
      >
      </TextField>
    )
  
  } else {
    return (
      <FormGroup>
        <ControlLabel>{input.name}</ControlLabel>
        <FormControl.Static>
          {type} is not implemented
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
            // console.log(response.data.data)
            _this.setState({modelData: response.data.data})
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
          spam="eggs"
          validate={validators.presence()}
        />
      </div>
    )
  }

  render() {
    console.log("render the form")
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