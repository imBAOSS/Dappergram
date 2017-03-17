class Api::UsersController < ApplicationController
  def show
    @user = User.find_by_id(params[:id])
    if @user
      render 'api/users/show'
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :description, :photo_url)
  end
end
