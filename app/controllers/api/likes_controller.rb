class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    render json: @like.errors.full_messages, status: 422 unless @like.save
  end

  def destroy
    @like = Like.find_by_user_id(current_user.id)
    @like.destroy!
  end

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
