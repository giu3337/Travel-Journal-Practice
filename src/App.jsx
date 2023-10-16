import Nav from './components/Nav'
import CardSection from './components/CardSection'
import travelData from './data'


function App() {


  return (
    <div>
      <Nav/>
      <CardSection data={travelData}/>
    </div>
      
    
  )
}

export default App
