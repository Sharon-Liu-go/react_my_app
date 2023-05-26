import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage, HomePage, ChatroomPage } from './pages';
function App() {
  return (
    <div>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            {/* <Route path="home" element={<HomePage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="Chatroom" element={<ChatroomPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}
export default App;