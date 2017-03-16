Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create] do
      resources :photos, only: [:index, :create]
    end
    resources :photos, only: [:show]
  end
end
