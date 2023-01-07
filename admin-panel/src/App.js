import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobListing from './JobListing';
import JobsCreate from './JobsCreate';
import JobDetail from './JobDetail';
import JobEdit from './JobEdit';
function App() {
  return (
    <div className="App">
      <h1>ADMIN Page</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<JobListing />}></Route>
          <Route path='/jobs/create' element={<JobsCreate />}></Route>

          <Route path='/jobs/detail/:jid' element={<JobDetail />}></Route>
          <Route path='/jobs/edit/:id' element={<JobEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
