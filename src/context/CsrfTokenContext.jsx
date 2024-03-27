import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CsrfTokenContext = createContext();

export const CsrfTokenProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState('');

  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/csrf_token.json' : 'https://taa-logistics-server.onrender.com/csrf_token.json';

  console.log(csrfToken);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCsrfToken(response.data.csrf_token);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <CsrfTokenContext.Provider value={csrfToken}>
      {children}
    </CsrfTokenContext.Provider>
  );
};
