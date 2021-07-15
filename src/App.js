
import './App.css';
import Movie from './Components/MoviesListing'
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
      <Header heading="Movies Listing Task" />
      <Movie />
    </div>
  );
}
export default App;
