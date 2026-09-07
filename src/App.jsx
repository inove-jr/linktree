import './index.css'

function App() {
  return(
    <div className='h-screen m-auto flex flex-col justify-center items-center bg-[linear-gradient(180deg,rgba(6,6,79,1)_46%,rgba(6,6,46,1)_100%)]'>
      <div className=" w-[50vh] h-[50vh] flex flex-col gap-[25px]">
        <img className="h-[20vh] m-auto" src="/logo.png" alt="" />

        <p className="text-center text-white">Vem inovar seu futuro com a gente</p>

        <div className="flex flex-col gap-[20px] items-center">
          <div>
            <button className="cursor-pointer bg-white  w-[350px] h-[50px] rounded-[10px] flex justify-center items-center"><img className='h-[5vh] relative right-[80px]' src="/whatsapp.png" alt="" /><a className="" href="#">Entre em contato</a></button>
          </div>
          <div>
            <button className="cursor-pointer bg-white  w-[350px] h-[50px] rounded-[10px] flex justify-center items-center"><img className='h-[5vh] relative right-[75px]' src="/povo.png" alt="" /><a href="#">Processo Seletivo</a></button>
          </div>
          <div>
            <button className="cursor-pointer bg-white  w-[350px] h-[50px] rounded-[10px] flex justify-center items-center"><img className='h-[5vh] relative right-[110px]' src="/linkedin.png" alt="" /><a href="#">Linkedin</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App