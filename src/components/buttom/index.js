import './style.css';
import cruz from '../../img/cruz.png';
import cruz2 from '../../img/cruz.png';
import cruz3 from '../../img/cruz.png';
import cruz4 from '../../img/cruz.png';
import cruz5 from '../../img/cruz.png';
import traço from '../../img/traço.png';
import traço2 from '../../img/traço.png';
import traço3 from '../../img/traço.png';

function Button() {
  return (
    <div>
      <img className="c-cruz" src={cruz} />
      <img className="c-cruz2" src={cruz2} />
      <img className="c-cruz3" src={cruz3} />
      <img className="c-cruz4" src={cruz4} />
      <img className="c-cruz5" src={cruz5} />
      <img className="c" src={traço} />
      <img className="c2" src={traço2} />
      <img className="c3" src={traço3} />
    </div>
  );
}

export default Button;
