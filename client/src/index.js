import React, { createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { user } from './store/user';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: {...user}
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

