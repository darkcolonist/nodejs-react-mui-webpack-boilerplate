import React from 'react';

export default function HomeSection(){
  return <React.Fragment>
      <h2>welcome!</h2>
      <p>this is the {env.APP_NAME} home page</p>
    </React.Fragment>;
}