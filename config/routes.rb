Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :photos, only: [:index, :create]
    end
    resources :photos, only: [:index, :show]
  end
end
