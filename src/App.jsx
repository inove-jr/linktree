import './index.css';
import data from './data.json'
import { useEffect } from 'react';

function App() {
  const redes = data.redes_sociais;

  return(
    <div className='h-screen m-auto flex flex-col justify-center items-center bg-[linear-gradient(180deg,rgba(6,6,79,1)_46%,rgba(6,6,46,1)_100%)] sm:h-screen sm:m-auto sm:flex sm:flex-col sm:justify-center sm:items-center sm:bg-[linear-gradient(180deg,rgba(6,6,79,1)_46%,rgba(6,6,46,1)_100%)]'>
      <div className=" relative top-[-50px] w-[50vh] h-[50vh] flex flex-col gap-[20px] sm:relative sm:top-[-70px] sm:w-[50vh] sm:h-[50vh] sm:flex sm:flex-col sm:gap-[25px]">
        <img className="h-[15vh] m-auto sm:h-[20vh] sm:m-auto" src="/logo.png" alt="" />

        <p className="text-center text-white sm:text-center sm:text-white">Vem inovar seu futuro com a gente</p>

        <div className="flex flex-col gap-[20px] items-center sm:flex sm:flex-col sm:gap-[20px] sm:items-center">
          {data.redes_sociais.map((elemento) => 
          <div key={elemento.id}>
            <a href={elemento.url} target="_blank" rel='noreferrer' className="relative cursor-pointer bg-white w-[250px] h-[50px] rounded-[10px] flex justify-center items-center sm:relative sm:cursor-pointer sm:bg-white sm:w-[350px] sm:h-[50px] sm:rounded-[10px] sm:flex sm:justify-center sm:items-center">
              <img className='absolute left-4 top-[12px] w-6 h-6 sm-absolute sm-left-4 sm-top-[12px] sm-w-6 sm-h-6' src={elemento.icone} alt={elemento.plataforma}/>

                {elemento.texto}

            </a>
          </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App










