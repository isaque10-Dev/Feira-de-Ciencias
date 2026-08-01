import './App.css';
import imagem from './image.png';
import xavier from './Xavier.png';
import bruno from './bruno.png';

function App() {
  return (
    <div className="App">
      <section className='mae'>
      <header>
<img src={imagem} alt='' className='logo'/> 

            <h1 className='inst'>INSTITUTO SOCIAL NOSSA SENHORA DE FÁTIMA</h1>

      </header>

      <section className='meio'>
      <section className='inc'>
        <h2>Seu futuro na <span>6a Feira</span> de profissões do Frei!</h2>
        <h2>Faça sua inscrição</h2>
        
          <div className='teste'>
        <div className='a1'>Fazer minha inscrição</div>
        <div className='a2'>Ver Programação</div>
          </div>


      </section>
          <div className='xavier'>
            <img src={xavier} alt='' className='foxa'/>
          </div>
       </section>


       <section className='his'>
        <div className='bruno'>
          <img src={bruno} alt='' className='careca'/>
          <div><p>Atualmente, além de executivo de TI, sou professor no Instituto onde nossa MISSÃO é  EDUCAR, PREPARAR OS JOVENS PARA O MERCADO DE TRABALHO com habilidades técnicas, humanas e conceituais. </p></div>  
         <div> <h2>Bruno de Oliveira - Cursos de Informática 2005 e Inglês 2006</h2></div>
        </div>



        <div className='historia'>
          <h2>Nossa História</h2>
          <br/>
          <br/>
          <p>A Escola Profissional Nossa Senhora de Fátima oferece formação técnica e cursos de qualificação em uma infraestrutura moderna, com salas equipadas, laboratórios, oficinas, biblioteca e auditório.
            <br/>
            <br/>
            Aqui, preparamos nossos alunos para entrar no mercado de trabalho com <span>confiança</span> e <span>competitividade</span>.</p>
        </div>


       </section>




        
      </section>
     
    </div>
  );
}

export default App;
