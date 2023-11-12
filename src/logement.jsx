import Zone from "./zone"
import TypeLogement from "./type_logement"
import Colocation from "./colocation"
import Loyer from "./loyer"

function Logement() {

  return (
    <div>
      <h1>Logement</h1>
      <Zone />
      <TypeLogement />
      <Colocation />
      <Loyer />
      </div>
  )
}

export default Logement