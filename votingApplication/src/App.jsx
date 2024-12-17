import Navbar from "./navigationComponent" 
import Hero from "./heroComponent"
import Features from "./featureComponent"
import Footer from "./footerComponent"
function App() {
  

  return (
    <div className="bg-gray-100 min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Footer />
  </div>
  )
}

export default App
