import './App.css';
import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>Gregory Fulbright - v52x386</h2>
      <MyCounter incBy={1}/> <hr />
      <MyCounter incBy={2}/> <hr />
      <MyGitHub />

    </div>
  );
}

export default App;
