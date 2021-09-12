  import { connect } from 'react-redux';
import ListingShow from './listing_show';

import {fetchListing, deleteListing} from '../../actions/listings_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    users: state.entities.users,
    session: state.session.id
}}


const mDTP = dispatch => ({
    deleteListing: listingId => dispatch(deleteListing(listingId)),
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mSTP, mDTP)(ListingShow)