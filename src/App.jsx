
import './App.css'
import About from './Component/About/About'
import Education from './Component/Education/Education'
import NavBar from './Component/NavBar/NavBar'
import SmallNavLinks from './Component/NavBar/SmallNavLinks'
import Skills from './Component/Skills/Skills'
import NavBanner from './JointComponent/NavBanner/NavBanner'
import StarBorder from './ReactBits/StarBorder/StarBorder'


function App() {


  return (
<div>
    <NavBanner></NavBanner>
    <About></About>
    <section>
      <Skills></Skills>
    </section>
    <section>
      <Education></Education>
    </section>
</div>
  )
}

export default App
