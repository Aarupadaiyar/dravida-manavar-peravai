import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission'
import Thinkers from './components/Thinkers'
import IdeologyLeaders from './components/IdeologyLeaders'
import FoundingNote from './components/FoundingNote'
import SecretaryNote from './components/SecretaryNote'
import Stats from './components/Stats'
import Clubs from './components/Clubs'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <VisionMission />
      <Thinkers />
      <IdeologyLeaders />
      <FoundingNote />
      <SecretaryNote />
      <Stats />
      <Clubs />
      <Cta />
      <Footer />
    </div>
  )
}
