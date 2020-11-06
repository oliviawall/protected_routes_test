import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, 
  // isSubscribed, 
  ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
      if (user 
        // && isSubscribed
        ) {
       return <Component {...rest} {...props} />
    } else {
      return <Redirect to={
        {
          pathname: '/unauthorized',
          state: {
            from: props.location
          }
        }
      } />
     }
    }
   } />
  )
}

export default ProtectedRoute;