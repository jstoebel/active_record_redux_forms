import React from 'react';

import {FormGroup, FormControl, ControlLabel HelpBlock} from 'react-bootstrap'

const TextField = ({ id, label, help, validationState, ...props }) => {
  return (
    <FormGroup 
        controlId={id}
        validationState={validationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default TextField