class Api::InfinitePhotosController < ApplicationController
  def index
    @photos = Photo.all
              .where("created_at < ?", params[:created_at])
              .order("created_at DESC")
              .limit(10)
    if @photos
      render 'api/photos/index'
    end
  end
end
