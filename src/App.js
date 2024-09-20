import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Components/Form'
import { UserProvider } from './Components/Context';
import ClassForms from './Components/ClassForms';
import ClassUser from './Components/ClassUser';
import ExpensiveCalculationComponent from './Components/Memo'
import Callback from './Components/Callback';
import CountReducer from './Components/CountReducer';

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/class' element={<ClassForms />} />
            <Route path='/memo' element={<ExpensiveCalculationComponent />} />
            <Route path='/user' element={<ClassUser />} />
            <Route path='/callback' element={<Callback />} />
            <Route path='/countreducer' element={<CountReducer />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
