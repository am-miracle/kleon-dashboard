import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Settings, Dashboard, Login, Email, Kanban, Contact, Calendar, Invoices, Navbar } from './components/index';
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
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/email" element={<Email />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/invoice" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
