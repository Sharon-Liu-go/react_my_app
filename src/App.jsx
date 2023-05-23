import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage, HomePage } from './pages';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;