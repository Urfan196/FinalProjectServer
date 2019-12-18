Rails.application.routes.draw do
  resources :messages, only: [:index, :show, :create]
  resources :convos, except: [:new, :edit, :update] 
  resources :items, except: [:new, :edit] 
  resources :locations, except: [:new, :edit, :destroy] 
  resources :users, except: [:new, :edit] 
  
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  get '/reauth', to: 'auth#re_auth'

end
