// EXPORTED BY THE PACKAGE. NOT THE USERS'!!

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios'

const renderField = (field) => {
  // implements redux form for registration
  if (field.meta.touched && field.meta.error) {
    const style = {
      color: 'red',
      fontWeight: 'bold',
    };
    return (
        <div>
          <input className="form-control" {...field.input}/>
          <div style={style} className="error">{field.meta.error}</div>
        </div>
    );
  } else {
    return (
      <div>
        <input className="form-control" {...field.input}/>
      </div>
    );
  }
};

class Form extends Component {

  constructor() {
    super();
    this.render = this.render.bind(this);
    console.log("setting state")
    this.state = {modelData: []}

  }
  /**
   * fetch data on the model and set to state
  */
  componentDidMount() {
    axios.get(`/model/${this.props.for}`)
         .then(function (response) {
            console.log(response)
            this.setState({modelData: response.data})
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
      <Field
        name={field.col_name}
        className="form-control"
        component={renderField}
        type="text"
      />
    )
  }

  render() {
    const {handleSubmit} = this.props;
    console.log("render")
    console.log(this.state)
  
    if (this.state.modelData) {
      return (
        <div>
          <form onSubmit={handleSubmit(this.props.onSubmit)}>
            {this.state.modelData.map(this.eachField)}
            <button type="submit" className="btn btn-primary">Login</button>
            }
          </form>
        </div>
      )
    } else {
      return <div></div>
    }
    // return (
    //   <form onSubmit={handleSubmit(this.handleFormSubmit)}>
    //   {this.renderAlert()}
    //   <div className="row">
    //     <div className="col-md-6">
    //       <label>First Name</label>
    //       <Field
    //         name="firstName"
    //         className="form-control"
    //         component={renderField}
    //         type="text"
    //       />
    //     </div>
    //     <div className="col-md-6">
    //       <label>Last Name</label>
    //       <Field
    //         name="lastName"
    //         className="form-control"
    //         component={renderField}
    //         type="text"
    //       />
    //     </div>
    //   </div>
    //     <div className="row">
    //       <div className="col-md-12">
    //         <label>Email</label>
    //         <Field
    //           name="email"
    //           className="form-control"
    //           component={renderField}
    //           type="text"
    //         />
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-12">
    //         <label>Password</label>
    //         <Field
    //           name="password"
    //           className="form-control"
    //           component={renderField}
    //           type="password"
    //         />
    //       </div>
    //     </div>
    //     <button type="submit" className="btn btn-primary">Register</button>
    //   </form>
    // );
  }
}

export default Form