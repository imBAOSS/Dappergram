json.extract! @comment, :id, :photo, :body
json.user @comment.user, :id, :name, :username
