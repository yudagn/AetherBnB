Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show, :update]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
