# end point
 - should only handle validations that can be implemented w/o database

 < / MyCustomContainer for="User" myPropOne={spam} myPropTwo={eggs}>
     
     // => this is your own implemented container. You can wireup state from store and dispatches you must supply two props:
         - `for`(string): the model to be rendered
         - `onSubmit` (function) the function to run when the form is submitted

     </Form> (decorated)
         
         now your form can:
             - render fields and validations from the database.