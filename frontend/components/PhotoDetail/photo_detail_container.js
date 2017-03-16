import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.photos,
    photo: state.photo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: photo => dispatch(fetchPhoto(photo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
