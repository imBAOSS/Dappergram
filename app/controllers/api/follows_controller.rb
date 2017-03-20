class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.followerId = current_user.id
    
    if @follow.save
      render 'api/follow/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end

  end

  def destroy

  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end
