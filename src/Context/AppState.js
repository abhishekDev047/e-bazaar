import React,{useState} from 'react';
import AppContext from './AppContext';


const AppState = (Props) => {
    const [login, setLogin] = useState(true);

  return (
    <AppContext.Provider value={{login,setLogin}}>
        {Props.children}
    </AppContext.Provider>
  )
}

export default AppState;