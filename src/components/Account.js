import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import classes from './../styles/Account.module.css';

export default function Account() {
  const { user, dispatch } = useContext(Context);

  // console.log('testing ' + user);
  // console.log('testing ' + user.data);
  // console.log('testing ' + user.data.email);
  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const navigate = useNavigate();

  const handlePostStory = () => {
    navigate('/write');
  };
  const showAllStory = () => {
    navigate('/stories/user/' + user.data.user.id);
  };
  return (
    <div className={classes.account}>
      {user ? (
        <>
          <div className={classes.accountClickable}>
            <span title="Create a blog" onClick={handlePostStory}>
              Write
            </span>
          </div>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <div className={classes.accountClickable}>
            <span title="Click to see all blogs of this user" onClick={showAllStory}>
              {user.data.customer.name}
            </span>
          </div>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            {' '}
            logout{' '}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
