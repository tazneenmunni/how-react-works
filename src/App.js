import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';


function App() {
  return (
    <div className="App">
      <Watch></Watch>
      <Device name="iPhone"></Device>
    </div>
  );
}

export default App;
