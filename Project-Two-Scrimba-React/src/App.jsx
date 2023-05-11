import heroImage from './assets/photo-grid.png'
import './App.css'


function App() {
  return (
    <>
      <img src={heroImage} alt="fun pics" className="hero-image" />
      <div className="text-content">
        <h1 className='subtitle'>Online Experiences</h1>
        <p className="text-info">Join unique interactive activities led by one of a kind hosts, all without leaving home</p>
      </div>

    </>
  )
}

export default App
