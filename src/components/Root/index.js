import img from '../../shared/image.png';
import './style.css';

function Component() {
  return (
    <div className="App">
      <header className="Root-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Bendebery design
        </p>
      </header>

    </div>
  );
}

export default Component;
