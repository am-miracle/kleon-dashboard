import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Settings, Dashboard, Login, Email, Kanban, Contact, Calendar, Invoices, Navbar, Comment, SideBar } from './components/index';
import useToken from './components/useToken';



function App() {
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div className='flex w-full px-0'>
        <div className="">
          <SideBar />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Comment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/email" element={<Email />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/invoice" element={<Invoices />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
