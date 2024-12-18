import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Function/Form';
import { UserProvider } from './Components/Function/Context';
import ClassForms from './Components/Class/ClassForms';
import ClassUser from './Components/Class/ClassUser';
import MemoHook from './Components/Function/Memo';
import Callback from './Components/Function/Callback';
import Reducer from './Components/Function/Reducer';
import HigherOrder from './Components/Higher order/HigherOrder';
import Ref from './Components/Function/Ref';
// import About from './Components/Function/About';
import Slide from './Components/Slide/slide';
import PlayVideo from './Components/Slide/PlayVideo';
import WatchList from './Components/Slide/WatchList';
import Index from './Components/Css/Border/Index';
import Border from './Components/Css/Border/Border';
import BorderImage from './Components/Css/Border/BorderImage';
import BorderTop from './Components/Css/Border/BorderTop';
import Card from './Components/Css/Card';
import Transition from './Components/Css/Transition/Transition';
import Transform from './Components/Css/Transform/Index'
import Test from './Components/Css/Transform/Test';
import Tests from './Components/Css/Transform/Tests';
import Position from './Components/Position/Position';
import Perspective from './Components/Css/Transform/Perspective '
const LazyAbout = React.lazy(() => import('./Components/Function/About'));

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
            <Route path='/reducer' element={<Reducer />} /> {/* Renders CountReducer at /reducer */}
            <Route path='/higherorder' element={<HigherOrder />} /> {/* Renders HigherOrder at /higherorder */}
            <Route path='/ref' element={<Ref />} /> {/* Renders Ref at /ref */}
            <Route path='/slide' element={<Slide />} />
            <Route path="/play/:id" element={<PlayVideo />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/index" element={<Index />} />
            <Route path="/border" element={<Border />} />
            <Route path="/borderimage" element={<BorderImage />} />
            <Route path="/bordertop" element={<BorderTop />} />
            <Route path="/card" element={<Card />} />
            <Route path="/transition" element={<Transition />} />
            <Route path="/transform" element={<Transform />} />
            <Route path="/test" element={<Test />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/position" element={<Position />} />
            <Route path="/perspective" element={<Perspective />} />
            {/* Lazy-loaded About route */}
            <Route
              path="/about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
