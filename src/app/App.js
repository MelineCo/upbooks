import Header from '../components/Header'
import Thread from '../components/Thread'
import NoBooksFound from '../features/books/NoBooksFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Thread />
      <NoBooksFound />
    </div>
  );
}

export default App;
