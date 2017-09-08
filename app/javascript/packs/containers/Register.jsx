// this container is user specific!

import {connect} from 'react-redux';
import Form from '../ui/Form';
import {reduxForm} from 'redux-form';

const registerContainer = reduxForm({
  form: 'myForm',
})(Form);

function mapStateToProps(state) {
  return {};
}

/*
  this function ensures that any props passed into the container
  (i.e. <LoginContainer spam={eggs}) will override anything mapped out
  in mapStateToProps or mapDispatchToProps. This lets us pass spys into the
  container that are then passed into the component
*/

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(
                  mapStateToProps, {}, mergeProps
                )(registerContainer);
