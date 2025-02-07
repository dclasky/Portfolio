import { useState } from 'react'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Projects
        </h2>
        <ProjectList projects={projects} />
      </main>

      <Footer />
    </div>
  )
}

export default App
