class PhotosController < ApplicationController
  def index

  end

  def show

  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = params[:id]

    if @photo.save

    else

    end
  end

  def photo_params
    params.require(:photo).permit(:photo_url)
  end

end
