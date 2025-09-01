
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import SmallNavLinks from './Component/NavBar/SmallNavLinks'
import StarBorder from './ReactBits/StarBorder/StarBorder'


function App() {


  return (
<div>
    <nav>
      <StarBorder
  as="div"
  className="custom-class"
  color="cyan"
  speed="5s"
  thickness={5}
>
 <NavBar></NavBar>
</StarBorder>
      <SmallNavLinks></SmallNavLinks>
    </nav>
</div>
  )
}

export default App
