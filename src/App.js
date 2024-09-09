import img from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Bendebery design
        </p>
      </header>

      <section>

        <article>
          <h2>Contacts</h2>

          <p>Email: bendebery.design@gmail.com</p>

          <p><a className="custom-link" href="https://www.instagram.com/bendebery_design" target="_blank" rel="noreferrer">Instagram: bendebery_design</a> </p>
        </article>
      </section>
    </div>
  );
}

export default App;
