import './style.css';

function Ingredientes() {
  return (
    <div className="c-igredientes">
      <h2 className="c-text1">Adicionar igredientes</h2>
      <h3 className="c-text2">Até 8 sabores</h3>
      <p>
        <p className="igrediente">Queijo Cheddar</p>
        <input type="text" placeholder="+ R$ 4,99" />
      </p>
      <p>
        <p className="igrediente">Cebola Crisppy</p>
        <input type="texto" placeholder="+ R$ 1,50" />
      </p>
      <p>
        <p className="igrediente">Molho Cheddar</p>
        <input type="texto" placeholder="+ R$ 3,50" />
      </p>
      <p>
        <p className="igrediente">Molho de Picanha</p>
        <input type="texto" placeholder="+ R$ 3,50" />
      </p>
      <button className="c-botão">Adicionar</button>
      <p className="c-talher">Precisa de talher ?</p>
      <button className="c-1">1</button>
      <button className="c-2">2</button>
      <button className="c-4">1</button>
    </div>
  );
}

export default Ingredientes;
