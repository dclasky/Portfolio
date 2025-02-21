import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import Logo from './components/Logo'
import { projects } from './data/projects'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="min-h-screen flex flex-col bg-gray-100 w-full">
        <div className="h-screen flex flex-col items-center justify-center">
          <Logo />
          <h2 className="text-2xl sm:text-3xl font-bold text-center mt-8">
            {/*D C Lasky*/}
          </h2>
        </div>

        <main className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="max-w-[2000px] mx-auto">
            <ProjectList projects={projects} />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
