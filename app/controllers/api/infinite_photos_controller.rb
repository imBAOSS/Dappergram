class Api::InfinitePhotosController < ApplicationController
  def index
    @photos = Photo.all
              .where("id < ?", params[:id])
              .order("id DESC")
              .limit(10)
    if @photos
      render 'api/photos/index'
    end
  end
end
