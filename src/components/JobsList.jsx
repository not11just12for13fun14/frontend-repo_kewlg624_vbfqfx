import { useEffect, useState } from 'react'

export default function JobsList() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/jobs`)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const processJob = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/jobs/${id}/process`, { method: 'POST' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      await fetchJobs()
      if (data.result_video_url) window.open(data.result_video_url, '_blank')
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white/90 font-semibold">Recent Jobs</h3>
        <button onClick={fetchJobs} className="text-sm text-white/70 hover:text-white">Refresh</button>
      </div>
      <div className="grid gap-3">
        {loading ? (
          <p className="text-white/70">Loading…</p>
        ) : items.length === 0 ? (
          <p className="text-white/60">No jobs yet. Create one above.</p>
        ) : (
          items.map((job) => (
            <div key={job.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-white font-medium">{job.title || job.keyword || job.subreddit || 'Reddit Story'}</p>
                  <p className="text-white/60 text-sm">Status: {job.status}</p>
                </div>
                <div className="flex items-center gap-3">
                  {job.result_video_url && (
                    <a href={job.result_video_url} target="_blank" className="px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">View</a>
                  )}
                  {job.status !== 'completed' && (
                    <button onClick={() => processJob(job.id)} className="px-3 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600">Process</button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
