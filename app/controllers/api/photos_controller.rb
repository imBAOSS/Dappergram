class Api::PhotosController < ApplicationController
  def index
    if params[:id]
      @photos = Photo.find_by_user_id(params[:id]).reverse
    else
      @photos = Photo.all.reverse
    end

    render 'api/photos/index'
  end

  def show
    @photo = Photo.find_by_id(:id)
    render 'api/photos/show'
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = params[:id]

    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def photo_params
    params.require(:photo).permit(:user_id, :photo_url, :description)
  end
end
