import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OverviewSection from './components/OverviewSection'
import SpeakersSection from './components/SpeakersSection'
import ScheduleSection from './components/ScheduleSection'
import ResourcesSection from './components/ResourcesSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <OverviewSection />
      <SpeakersSection />
      <ScheduleSection />
      <ResourcesSection />
      <Footer />
    </div>
  )
}

export default App
