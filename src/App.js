import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { FormattedMessage, useIntl} from 'react-intl';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const intl = useIntl(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación del correo y contraseña
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage(intl.formatMessage({id: "emailRestric"}));
      return;
    }
    if (password.length < 8) {
      setErrorMessage(intl.formatMessage({id: "passRestric"}));
      return;
    }

    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2><FormattedMessage id = "login"/></h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label><FormattedMessage id = "email"/></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label><FormattedMessage id = "password"/></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit"><FormattedMessage id = "login"/></button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
