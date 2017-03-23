class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = params[:photo_id]

    if @comment.save
      render 'api/comments/show', status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    if @comment.destroy
      render 'api/comments/show'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :photo_id, :body)
  end
end
