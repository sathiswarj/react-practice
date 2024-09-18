import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Components/Form'
import { UserProvider } from './Components/Context';
import ClassForms from './Components/ClassForms';
import ClassUser from './Components/ClassUser';

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/form' element={<ClassForms />} />
            <Route path='/user' element={<ClassUser />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
