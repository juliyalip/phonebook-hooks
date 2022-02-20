import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getCurrentUser} from './redux/auth/auth-operations'
import Container from './component/Container/Container';
import RegistrForm from './component/header/RegisterForm/RegistrForm';
import LoginForm from './component/header/LoginForm/LoginForm';
import PhonebookPage from './pages/PhonebookPage/PhonebookPage';

import './App.css';
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);
// операция - текущий польз.


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
