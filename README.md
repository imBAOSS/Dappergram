# Dappergram

[Dapper.life][live link] is a web application inspired by [Instagram][instagram] designed for men's fashion enthusiast. DapperLife allows users to view, comment, like and follow their favorite users utilizing a Ruby on Rails backend with PostgreSQL database and a React/Redux frontend.

## Features and Implementations

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

### Infinite Scrolling

[Infinite Scroll][infinite]

Renders only what the user needs or what is necessary with [React Infinite Scroller][infinite scroller]. Using infinite scroll, new photos are fetched only within a certain threshold from the end of the rendered view, allowing for resource conservation during browsing.

```js
// profile_feed.jsx
// Fetches first 10 photos unless there's already photos present in state, in which case, the next 10 is fetched.
  fetchMorePhotos() {
    if (this.state.photos[0]) {
      const created_at = this.state.photos[Object.keys(this.state.photos).length  - 1].created_at;
      PhotoAPIUtil.fetchMorePhotos(created_at)
      .then(photos => this.insertMorePhotos(photos));
    } else {
      this.props.fetchPhotos();
    }
  }

// Takes fetched photos and appends them to current photos in state. Also tags state with boolean that indicates whether or not there's more photos to fetch
  insertMorePhotos(newPhotos) {
    let combinedPhotos = Object.keys(this.state.photos).map(id => this.state.photos[id]);
    let photoArr = combinedPhotos.concat(newPhotos);
    let photos = {};
    photoArr.forEach( (el, i) => photos[i] = el );

    let hasMorePhotos = true;
    if (newPhotos.length < 10) {
      hasMorePhotos = false;
    }
    this.setState({ photos, hasMorePhotos });
  }

  render() {
    let feed = Object.keys(this.state.photos).map(id => (
        <PhotoDetailContainer
          key={id}
          photos={this.state.photos}
          photoId={id}
          currentUser={this.props.session.currentUser}/>
      )
    );

// Calls fetchMorePhotos when within 1000px of the end of the window.
    return (
      <div className='feed'>
        <div className='photo-feed'>
          <div className='photo-feed-container'>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.fetchMorePhotos}
              hasMore={this.state.hasMorePhotos}
              useWindow={true}
              threshold={1000}>
              {feed}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
}
```

### Image Filtering

[Image Filter][image filter]

Utilizing the power of the [classnames][classnames] node package, users can enjoy some cool filters that can be applied to the photos. A slide in menu on the right side of each photo provides an abundant of filters that apply to individual photos for an enjoyable, creative experience.

```js
// photo.jsx
// Local state that stores which filters are applied.
this.state = {
  filter: {
    blur: false,
    brighter: false,
    darker: false,
    contrast: false,
    fade: false,
    grayscale: false,
    invert: false,
    saturate: false,
    sepia: false,
    opacity: false
  }
}

// Filters are applied by setting a new state to reflect changes.
resetFilters() {
  this.setState({
    filter: {
      blur: false,
      brighter: false,
      darker: false,
      contrast: false,
      fade: false,
      grayscale: false,
      invert: false,
      saturate: false,
      sepia: false,
      opacity: false
  }})
}

blur() {
  this.setState({filter: {blur: true}});
}

brighter() {
  this.setState({filter: {brighter: true}});
}

// More filters...

// On click, functions to set state for respective filters are invoked.
<div className='filter-menu'>
  <button onClick={this.resetFilters}><p>Reset</p></button>
  <button onClick={this.blur}>Blur</button>
  <button onClick={this.brighter}>Brighter</button>
  <button onClick={this.darker}>Darker</button>
  <button onClick={this.contrast}>Contrast</button>
  <button onClick={this.fade}>Fade</button>
  <button onClick={this.grayscale}>Grayscale</button>
  <button onClick={this.invert}>Invert</button>
  <button onClick={this.saturate}>Saturate</button>
  <button onClick={this.sepia}>Sepia</button>
  <button onClick={this.opacity}>Opacity</button>
</div>
```

## Project Design

## Technologies


[live link]: http://www.dapper.life/
[instagram]: https://www.instagram.com/
[login]: ./docs/images/login.gif
[infinite]:
[infinite scroller]: https://github.com/CassetteRocks/react-infinite-scroller
[image filter]:
[classnames]: https://github.com/JedWatson/classnames
