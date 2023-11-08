import React, { useEffect } from 'react';
import Layouts from './layouts/Layouts';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{

    Aos.init();
    
  },[]);


  return (
    <>
    <Layouts />
    </>
  )
}

export default App;