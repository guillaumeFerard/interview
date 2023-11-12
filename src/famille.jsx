import Sitfam from "./sitfam"
import Grossesse from "./grossesse"
import Charge from "./charge"
import Handicap from "./handicap"


function Family() {

  return (
    <div>
      <h1>Composition familiale</h1>
      <Sitfam />
      <Grossesse />
      <Charge />
      <Handicap />
    </div>
  )
}

export default Family