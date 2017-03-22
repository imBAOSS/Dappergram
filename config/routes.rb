Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :photos, only: [:index, :create]
      resources :follows, only: [:create]
    end
    resources :photos, only: [:index, :show] do
      resources :likes, only: [:create]
      resources :comments, only: [:create]
    end
    resources :likes, only: [:destroy]
    resources :follows, only: [:destroy]
    resources :comments, only: [:destroy]
    resources :infinite_photos, only: [:index]
  end
end
