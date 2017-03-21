import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import PhotoDetail from '../PhotoDetail/photo_detail';
import InfiniteScroll from 'react-infinite-scroller';
import PhotoDetailContainer from '../PhotoDetail/photo_detail_container';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
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

  componentWillMount() {
    this.props.fetchPhotos();
  }

  fetchMorePhotos() {
    this.fetchMorePhotos
  }

  render() {
    let imageUrl;
    if (this.props.session.currentUser) {
      imageUrl = <img src={this.props.session.currentUser.photo_url}/>;
    }

    let feed = Object.keys(this.props.photos).map(id => (
        <PhotoDetailContainer
          key={id}
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
              loader={<div className="loader">Loading ...</div>}>
              {feed}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoFeed);
