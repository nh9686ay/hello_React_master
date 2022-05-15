
import './App.css';
import Hello from './Hello';
const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']
function App() {
  return (
    <div className="App">
      <Hello name="Emon" />
      {
        names.map(name => {
          return <Hello name={name} />
        })
      }
    </div>
  );
}

export default App;
