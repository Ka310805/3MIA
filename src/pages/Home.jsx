import NavProjeto from '../components/NavProjeto'
import Carrosel from '../components/Carrosel'
import Cards from '../components/Cards'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Espacamento from '../components/Espacamento'

function Home() {
  return (
    <div>
     <Cabecalho/>
     <NavProjeto />
     <Carrosel />
     <Espacamento />
     <Cards />
     <Espacamento />
     <Rodape />

    </div>
  )
} 
 export default Home
