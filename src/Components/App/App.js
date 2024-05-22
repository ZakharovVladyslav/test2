import MainHeader from "../Header/Header";
import Todos from "../Todos/Todos";
import SidePanel from "../SidePanel/SidePanel";
import './App.scss';

function App() {
  return (
    <main>
      <div className="app-container">
        <SidePanel/>
        <section className="content">
          <MainHeader/>
            <Todos/>
        </section>
    </div>
    </main>

  );
}

export default App;
