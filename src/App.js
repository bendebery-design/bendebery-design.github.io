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

          <p><a className="custom-link" href="https://www.instagram.com/bendebery_design" target="_blank" rel="noreferrer">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png" alt=""></img>
            Instagram: bendebery_design
          </a> </p>

          <p>Email: bendebery.design@gmail.com</p>
        </article>
      </section>
    </div>
  );
}

export default App;
