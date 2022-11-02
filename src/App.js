import './App.css';
import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';

function App() {
  return (
    <div>

      <MyCounter incBy={1}/> <hr />
      <MyCounter incBy={2} decBy={1}/> <hr />
      <MyGitHub /> <hr />

    </div>
  );
}

export default App;
