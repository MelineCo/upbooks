import { CategoriesSideBar } from '../components/CategoriesSideBar';
import JoinIn from '../components/JoinIn'
import Navbar from '../components/Navbar';
import Thread from '../components/Thread'
import { Data } from '../features/books/Data';

function App() {
  return (
    <div>
      <Navbar />
      <div class="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside class="sticky top-8 hidden w-64 shrink-0 lg:block border-r">
          <CategoriesSideBar />
        </aside>

        <main class="flex-1">
          <Data />
        </main>

        <aside class="sticky top-8 hidden w-96 shrink-0 xl:block">
          <JoinIn />
        </aside>
      </div>

    </div>
  );
}

export default App;
