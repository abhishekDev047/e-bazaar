import React,{useContext} from 'react';
import Login from './Login';
import AppContext from '../Context/AppContext';
import Home1 from './Home1';

const Home = () => {
    const logInfo =useContext(AppContext);
    if (logInfo.login === false) {
         return (
    <div>
        <Login/>
    </div>
  ) 
    }
    else{
        return(
            <Home1/>
        )
    }

}

export default Home;