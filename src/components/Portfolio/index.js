import img from '../../shared/image.png';
import './style.css';

function Component() {
  return (
    <header className="App-header">
      <img src={img} className="App-logo-small" alt="logo" />
      <p>
        Portfolio
      </p>
    </header>
  );
}

export default Component;
