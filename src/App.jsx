import DefaultLayout from './layouts/DefaultLayout';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className={darkMode ? "dark-mode" : ""}>
        <BrowserRouter>
          <Routes>
            <Route // Passa darkMode e setDarkMode al layout
              Component={() => <DefaultLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
            >
              {/* qui vanno le pagine */}
              <Route path="/" Component={HomePage} />
              <Route path="/movies/:id" Component={MoviePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
