class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by_id(params[:id])
    @like.destroy!
  end

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
