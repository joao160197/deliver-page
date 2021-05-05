import foto from '../../img/foto.png';
import preço from '../../img/R$31,99.png';
import preço2 from '../../img/R$34,95.png';
import './style.css';

function Body() {
  return (
    <body>
      <div>
        <img className="c-lanche" src={foto} />
      </div>
      <div className="c-descriçao">
        <h1>Oferta Picanha Cheddar Bacon</h1>
      </div>
      <div classNamel="c-texto">
        <p className="c-paragrafo">
          Habúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo
          cheddar, molho cheddar e pão mix de gergelin.
        </p>
      </div>
      <div>
        <img className="c-preço" src={preço} />
        <img className="c-preço2" src={preço2} />
      </div>
    </body>
  );
}

export default Body;
