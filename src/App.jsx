import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {AllRoutes} from './routes/AllRoutes';
import { Header } from './components';
import { Footer } from './components';


function App() {
const [inputsearch, setinputsearch] = useState("avatar")

  return (
    <Router>
      <div className='dark:bg-slate-800'>
      <Header inputsearch={inputsearch} setinputsearch={setinputsearch} />
      
        <AllRoutes inputsearch={inputsearch} setinputsearch={setinputsearch} />
      
      <Footer />
      </div>
    </Router>
  );
}

export default App;
