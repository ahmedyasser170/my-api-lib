import React from 'react';
import {default as MyHomePage} from './home';

const MyTestPage: React.FC = () => {
  return <div> Welcome to my test module page with Next.js!
    <MyHomePage></MyHomePage>
  </div>;
};


export default MyTestPage;