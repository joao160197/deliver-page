import './style.css';
import DeliverizeLogo from '../../img/DeliverizeLogo-1.png';
import DeliverizeLogo2 from '../../img/DeliverizeLogo-2.png';
import sacola from '../../img/sacola.png';
import user from '../../img/user.png';

function Header() {
  return (
    <header className="c-header">
      <div>
        <img className="c-logo" src={DeliverizeLogo} />
      </div>
      <div>
        <img className="c-titulo" src={DeliverizeLogo2} />
      </div>

      <div className="c-dropdown">
        Entrega:
        <select>
          <option>R. Antonio Braune, 222</option>
          <option>R. Adalgiza Guedes, 07</option>
          <option>R. Pablo Podesta, 22</option>
          <option>R. Paulo Guedes, 278</option>
        </select>
      </div>
      <div className="c-pesquisa">
        <input
          type="text"
          placeholder="       Busque por estabelecimento ou produtos  "
        />
      </div>
      <div>
        <img className="c-user" src={user} />
      </div>
      <div>
        <img className="c-carrinho" src={sacola} />
      </div>
    </header>
  );
}

export default Header;
