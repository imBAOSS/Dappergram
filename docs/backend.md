# Backend

## Ruby on Rails
Ruby on Rails was used to provide RESTful APIs.

## jBuilder
jBuilder was used to generate filtered JSON responses to requests.

## PostgreSQL Database
PostgreSQL was used in order to deploy to Heroku

## Other
Other dependencies include:
- Amazon Web Services (AWS) SDK for for photo and file storage via Amazon Simple Storage Service (S3).
- BCrypt for secure salting and hashing of passwords.
```Ruby
# user.rb
# Password is hashed upon login
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

# Session token is saved upon login and reset upon logout
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
```
