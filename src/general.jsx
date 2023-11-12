import Context from './contexte'
import Territory from './territoire'
import Benefit from './prestation'
import Month from './mois'

function General() {

  return (
    <div>
      <h1>Général</h1>
      <Context />
      <Territory />
      <Benefit />
      <Month />
      </div>
  )
}

export default General