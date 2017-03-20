import React from 'react';
import { Link, withRouter } from 'react-router';

class ProfilePageFeed extends React.Component {
  constructor(props) {
    super(props)
    this.populateFeed = this.populateFeed.bind(this)
    this.photoFeed = [];
  }

  componentWillMount() {
    this.props.fetchPhotos(this.props.router.params.id)
  }

  populateFeed() {
    let chunk = 3;
    let photos = this.props.photos;
    if (photos) {
      for (let i = 0; i < photos.length; i+=chunk) {
        let subChunk = photos.slice(i, i+chunk);
        let row =
        <div key={i} className="profile-feed-row">
          {
            subChunk.map((photo, idx) =>
              <div key={idx} className="profile-feed-photo-cont">
                <img className="profile-feed-photo" key={idx} src={photo.photo_url}/>
              </div>
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
