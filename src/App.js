import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import Adress from './Component/Profile/Adress'
import FullName from './Component/Profile/FullName'
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Adress />
      <FullName />
    </div>
  );
}

export default App;
