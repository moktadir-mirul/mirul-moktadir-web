
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import StarBorder from './ReactBits/StarBorder/StarBorder'


function App() {


  return (
<div>
    <nav>
      <StarBorder
  as="component"
  className="custom-class"
  color="cyan"
  speed="5s"
  thickness={5}
>
 
</StarBorder>
      
    </nav>
</div>
  )
}

export default App
