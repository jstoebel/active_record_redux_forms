Rails.application.routes.draw do
  resources :users
  resources :spams
  match 'model/:model_name', via: [:get], controller: 'models', action: 'model_info'

end
