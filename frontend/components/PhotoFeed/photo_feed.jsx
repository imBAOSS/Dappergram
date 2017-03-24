import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import PhotoDetail from '../PhotoDetail/photo_detail';
import InfiniteScroll from 'react-infinite-scroller';
import PhotoDetailContainer from '../PhotoDetail/photo_detail_container';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.fetchMorePhotos = this.fetchMorePhotos.bind(this);
    this.insertMorePhotos = this.insertMorePhotos.bind(this);
    this.state = {
      photos: this.props.photos,
      hasMorePhotos: true
    }
  }

  componentDidUpdate() {
    if (!this.props.session.currentUser) {
      this.props.router.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ photos: nextProps.photos });
  }

  fetchMorePhotos() {
    if (this.state.photos[0]) {
      const id = this.state.photos[Object.keys(this.state.photos).length  - 1].photoId;
      this.props.fetchPhotos({photo_id: photoId})
    } else {
      this.props.fetchPhotos();
    }
  }

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
}

export default withRouter(PhotoFeed);
