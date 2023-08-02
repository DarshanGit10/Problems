import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UseCallBack from './Hooks/UseCallBack'
import UseMemo from './Hooks/UseMemo';
import UseContext from './Hooks/UseContext';
import UseRef from './Hooks/UseRef-1';
import Pagination from './Problems/Pagination';
import DebounceSearch from './Problems/Debounce-Search';
import ReactMemo from './Others/ReactMemo';
import PropDrilling from './Others/PropDirlling';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route index element={<h1>Main Page</h1>} />
    <Route path='useCallBack' element={<UseCallBack/>}/>
    <Route path='useMemo' element={<UseMemo/>}/>
    <Route path='useContext' element={<UseContext/>}/>
    <Route path='useRef1' element={<UseRef/>}/>
    <Route path='page' element={<Pagination/>}/>
    <Route path='search' element={<DebounceSearch/>}/>
    <Route path='reactMemo' element={<ReactMemo/>}/>
    <Route path='propDrilling' element={<PropDrilling/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
