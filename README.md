# Dappergram
======

[Dapper.life][live link] is a web application inspired by [Instagram][instagram] designed for men's fashion enthusiast. DapperLife allows users to view, comment, like and follow their favorite users utilizing a Ruby on Rails backend with PostgreSQL database and a React/Redux frontend.

## Features and Implementations
------
### Authentication

![Login Demo][login]

DapperLife uses secure BCrypt technology to salt and hash passwords into a digest where it is then saved into the database. To sign up for an account, the required fields include `username`, `email`, and `password`. While `password` is required, it is not saved on the database, only the digested password is saved. Upon login or account creation, the user is logged in with a `session_token`. The `session_token` is reset upon logout.

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







[live link]: http://www.dapper.life/
[instagram]: https://www.instagram.com/
[login]: ./docs/images/login.gif
