class ApplicationController < ActionController::Base
  http_basic_authenticate_with :name => APP_CONFIG["base_user"], :password => APP_CONFIG["base_password"]
end
