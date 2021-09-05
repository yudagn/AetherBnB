import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mSTP= ({ session }) => ({
    currentUser: session.currentUser
  });

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Header);