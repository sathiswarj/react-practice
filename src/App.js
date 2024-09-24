import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Function/Form';
import { UserProvider } from './Components/Function/Context';
import ClassForms from './Components/Class/ClassForms';
import ClassUser from './Components/Class/ClassUser';
import MemoHook from './Components/Function/Memo';
import Callback from './Components/Function/Callback';
import CountReducer from './Components/Function/CountReducer';
import HigherOrder from './Components/HigherOrder';
import Ref from './Components/Function/Ref';

function App() {
  return (
    <>
      {/* The UserProvider provides context to all components wrapped inside it */}
      <UserProvider>
        <BrowserRouter>
          <Routes>
            {/* Route definitions for different components */}
            <Route path='/' element={<Form />} /> {/* Renders the Form component at the root path */}
            <Route path='/class' element={<ClassForms />} /> {/* Renders ClassForms at /class */}
            <Route path='/memo' element={<MemoHook />} /> {/* Renders MemoHook at /memo */}
            <Route path='/user' element={<ClassUser />} /> {/* Renders ClassUser at /user */}
            <Route path='/callback' element={<Callback />} /> {/* Renders Callback at /callback */}
            <Route path='/countreducer' element={<CountReducer />} /> {/* Renders CountReducer at /countreducer */}
            <Route path='/higherorder' element={<HigherOrder />} /> {/* Renders HigherOrder at /higherorder */}
            <Route path='/ref' element={<Ref />} /> {/* Renders Ref at /ref */}
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
