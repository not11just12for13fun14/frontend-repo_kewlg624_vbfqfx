import Hero from './components/Hero'
import JobForm from './components/JobForm'
import JobsList from './components/JobsList'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <section id="builder" className="relative py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Create a new Short</h2>
                <p className="text-white/70">Generate an AI-narrated video from Reddit and queue it for processing.</p>
              </div>
              <a href="/test" className="text-sm text-white/70 hover:text-white">System check</a>
            </div>

            <JobForm onCreated={() => { /* no-op for now, JobsList refresh handles */ }} />
            <JobsList />
          </div>
        </div>
      </section>

      <HowItWorks />

      <footer className="py-10 text-center text-white/60 text-sm">Built with Flames Blue</footer>
    </div>
  )
}

export default App
