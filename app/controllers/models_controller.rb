class ModelsController < ApplicationController

  ##
  # params:
  #   model_name: exact name of model
  # return model info as json.
  #   col_name: the name of the column
  #   type: the AR datatype of the column
  #   validators: object. can contain any of the following
  #     acceptance
  #     confirmation:
  #     exclusion:
  #     format:
  #     inclusion:
  #     length:
  #     numericality:
  #     presence:
  #     absence:

  #   example:
  #   validators:
  #      presence:
  #         active: true
  #         message: "can't be blank"

  #     
  #     
  # Assumptions
  #   for now doesn't handle any validations that require a database call
  #      

  def model_info
    @model = params[:model_name].constantize
    column_data = @model.columns.map{|c| {col_name: c.name,
                                         type: c.sql_type_metadata.type,
                                         validators: assemble_validator_info(c.name)
                                        }
                                   }


    
    # model.validators.each do |validator|
    #   # capture the type of validator
    #   re = /ActiveRecord::Validations::(?<validator>.+)Validator/
    #   validator = re.match(
    #                         User
    #                           .validator
    #                           .class
    #                           .to_s
    #               )['validator']
    #               .downcase
    #   # assign this validation to the column
    #   validator.attributes.each do |attr|

    #   end
    # end

    render json: {data: column_data}
  end

  private

  ## 
  # packages up all validation info on a column
  # col_name(string) name of a column
  # returns an array of hashs shaped like so:
  #   [
  #      {type: "presence", message: "can't be blank"}
  #      {type: "length", message: "some custom message"}
  #   ]
  def assemble_validator_info col_name
    validators = @model.validators_on(col_name).map do |validator|
      re = /ActiveRecord::Validations::(?<validator>.+)Validator/
      val_name = re.match(validator.class.to_s)['validator'].downcase
      {name: val_name, options: validator.options}
    end
    validators
  end

end
