import Row from './Row'
import './App.css'
import requests from './request'

function App() {
 
  return (
      <>
        <Row  title="NETFILX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>
      </>
      
    
  )
}

export default App
