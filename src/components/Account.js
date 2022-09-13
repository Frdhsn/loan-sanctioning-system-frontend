import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import classes from './../styles/Account.module.css';

export default function Account() {
  const { user, dispatch } = useContext(Context);

  console.log('testing from account.js');
  // console.log('testing ' + user.data);
  // console.log('testing ' + user.data.email);
  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    navigate('/');
  };

  const navigate = useNavigate();

  const handlePostStory = () => {
    navigate('/applyForLoan/');
  };
  const showAllStory = () => {
    navigate('/customers/loan/' + user.data.customer.id);
  };
  return (
    <div className={classes.account}>
      {user ? (
        <>
          <div className={classes.accountClickable}>
            <span title="Apply for loan" onClick={handlePostStory}>
              Apply
            </span>
          </div>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <div className={classes.accountClickable}>
            <span title="Click to see your loan status" onClick={showAllStory}>
              {user.data.customer.name}
              {/* bug */}
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
