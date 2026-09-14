import './index.css';
import data from './data.json'
import { useEffect } from 'react';

function App() {
  const redes = data.redes_sociais;

  return(
    <div className='h-screen m-auto flex flex-col justify-center items-center bg-[linear-gradient(180deg,rgba(6,6,79,1)_46%,rgba(6,6,46,1)_100%)]'>
      <div className=" w-[50vh] h-[50vh] flex flex-col gap-[25px]">
        <img className="h-[20vh] m-auto" src="/linktree/logo.png" alt="" />

        <p className="text-center text-white">Vem inovar seu futuro com a gente</p>

        <div className="flex flex-col gap-[20px] items-center">
          {data.redes_sociais.map((elemento) => 
          <div key={elemento.id}>
            <button className="cursor-pointer bg-white  w-[350px] h-[50px] rounded-[10px] flex justify-center items-center">
              <img className='h-[5vh] relative right-[80px]' src={elemento.icone} alt={elemento.plataforma}/>
            
              <a
                href={elemento.url}
                target="_blank"
                rel='noreferrer'
                className=""
              >
                {elemento.texto}
              </a>

            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App










