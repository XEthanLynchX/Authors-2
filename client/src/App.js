import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAll from './components/DispalyAll';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorForm from './components/AuthorForm';


function App() {
  return (
    
    <div className='App'>
    <h1>Favorite authors</h1> 
    {/* //This is the title of all pages  */}
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<DisplayAll/>} />
          <Route path="/new" element={<AuthorForm/>} />   
          <Route path ="/update/:id" element={<UpdateAuthor />} />
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
