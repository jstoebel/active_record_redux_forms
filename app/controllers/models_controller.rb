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
  #     
  #     
  # Assumptions
  #   for now doesn't handle any validations that require a database call
  #      

  def model_info
    model = params[:model_name].constantize
    data = model.columns.map{|c| {col_name: c.name, type: c.sql_type_metadata.type} }
    render json: {data: data}
  end

end
