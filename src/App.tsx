import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          D C Lasky
        </h2>
      </div>

      <main className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-[2000px] mx-auto">
          <ProjectList projects={projects} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
