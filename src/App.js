import Container from './component/Container/Container';
import { Routes, Route } from "react-router-dom";
import RegistrForm from './component/header/RegisterForm/RegistrForm';
import LoginForm from './component/header/LoginForm/LoginForm';
import PhonebookPage from './pages/PhonebookPage/PhonebookPage';

import './App.css';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/phonebook" element={<PhonebookPage />} />
        <Route path="/registr" element={<RegistrForm />} />
 <Route path="/login" element={<LoginForm />} />
       </Routes>
      
  </Container>
  );
}

export default App;
