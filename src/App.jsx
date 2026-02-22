import './App.css';
import basketIcon from './assets/basket-icon.svg';
import heroImage from './assets/hero-image.png';

function Button({ label = 'Add to basket', icon = true }) {
  return (
    <button className="button" type="button">
      <span>{label}</span>
      {icon && <img className="icon" src={basketIcon} alt="" />}
    </button>
  );
}

export default function App() {
  return (
    <div className="card">
      <div className="header-section">
        <div className="header-text">
          <h1>This is the site header</h1>
          <p>This is the secondary line of support messaging</p>
        </div>

        <div className="image-frame">
          <div className="image-container">
            <img src={heroImage} alt="Scenic coastal landscape" />
          </div>
        </div>
      </div>

      <Button />

      <div className="paragraphs">
        <div className="paragraph-col">
          <p className="para-heading">Paragraph header left</p>
          <p className="para-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            venenatis purus vel tortor pulvinar pharetra. Vestibulum ex nunc,
            fringilla in metus sed, dictum congue felis. Suspendisse eu ligula
            eget leo varius fermentum ut sit amet nisi. Quisque vestibulum
            pellentesque imperdiet.
          </p>
          <a className="text-link" href="#">This is a text link</a>
        </div>

        <div className="paragraph-col">
          <p className="para-heading">Paragraph header right</p>
          <p className="para-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            venenatis purus vel tortor pulvinar pharetra. Vestibulum ex nunc,
            fringilla in metus sed, dictum congue felis. Suspendisse eu ligula
            eget leo varius fermentum ut sit amet nisi. Quisque vestibulum
            pellentesque imperdiet.
          </p>
          <a className="text-link" href="#">This is a text link</a>
        </div>
      </div>
    </div>
  );
}
