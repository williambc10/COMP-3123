import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import StudentId from './StudentId';
import StudentName from './StudentName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome></Welcome>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <StudentId studentId="101381972"/>
        <StudentName studentName="William Cham"/>
        <h5>George Brown College, Toronto</h5>
      </header>
    </div>
  );
}

export default App;
