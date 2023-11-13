import Header from '../components/Header'
import Navbar from '../components/Navbar';
import Thread from '../components/Thread'
import { Data } from '../features/books/Data';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Data />
    </div>
  );
}

export default App;
