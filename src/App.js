import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [requete, setRequete] = useState()

  useEffect(() => {
    axios.get('/api')
    .then(data => setRequete(data.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {requete
      ? <p>{requete}</p>
      : ""
      }
    </div>
  );
}

export default App;
