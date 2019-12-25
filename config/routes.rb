Rails.application.routes.draw do
  resources :items, except: [:new, :edit], defaults: {format: :json}
  resources :locations, except: [:new, :edit, :destroy] 
  resources :users, except: [:new, :edit] 

  resources :convos, only: [:index, :create]
  resources :messages, only: [:create]
  mount ActionCable.server => '/cable'

  post '/login', to: 'auth#create'
  post '/near-locations', to: 'near_locations#create'
  get '/profile', to: 'users#profile'
  get '/reauth', to: 'auth#re_auth'

end
