import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class ProfilePageFeed extends React.Component {
  constructor(props) {
    super(props)
    this.populateFeed = this.populateFeed.bind(this);
    this.photoFeed = [];
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.fetchUser(nextProps.params.id)
      .then(this.props.fetchPhotos(nextProps.params.id));
    }
  }

  populateFeed() {
    this.photoFeed = [];
    let chunk = 3;
    let photos = this.props.photos;
    if (photos) {
      for (let i = 0; i < photos.length; i+=chunk) {
        let subChunk = photos.slice(i, i+chunk);
        let row =
        <div key={`row-${chunk}-${i}-${chunk}`} className="profile-feed-row">
          {
            subChunk.map((photo, idx) =>
              {
                return (
                  <div key={`line-${idx}`} className="profile-feed-photo-cont">
                    <img className="profile-feed-photo" src={photo.photo_url}/>
                  </div>
                )
              }
            )
          }
        </div>
        this.photoFeed.push(row);
      }
    }
  }

  render() {
    this.populateFeed();


    return (
      <div>
        { this.photoFeed }
      </div>
    );
  }
}

export default withRouter(ProfilePageFeed);
