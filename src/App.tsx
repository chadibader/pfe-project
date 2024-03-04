import {BrowserRouter, Routes,  Route} from 'react-router-dom';

import Verification  from './Verification/verification' ;
import Registration from './Login/registration';

function App() {
  return (
    (<div className="App">
      <><BrowserRouter>
          <Routes>
            <Route index  element={<Registration />}/>
            <Route path='/Registration' element={<Registration />}/>
            <Route path='/Verification' element={<Verification />}/>

          </Routes>
        </BrowserRouter></>
    </div>)
  );
}

export default App;
