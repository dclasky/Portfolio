import Header from './components/Header'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <Header />
      
      <main className="flex-grow w-full max-w-none px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">
          My Projects
        </h2>
        <div className="max-w-[2000px] mx-auto">
          <ProjectList projects={projects} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
