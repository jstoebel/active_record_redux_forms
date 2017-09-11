/**
* returns a validator for required presence
* msg(string): the error message to display
* value(string): the value of the field
*/
const presence = (msg='can\t be blank') => (value) => {
    return value ? undefined : msg
};

export default presence