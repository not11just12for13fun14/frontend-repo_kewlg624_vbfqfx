import { useState } from 'react'

export default function JobForm({ onCreated }) {
  const [form, setForm] = useState({
    subreddit: 'AskReddit',
    keyword: '',
    voice: 'male-calm',
    aspect_ratio: '9:16',
    include_captions: true,
    include_broll: true,
    autopost_youtube: true,
    autopost_tiktok: false,
    autopost_instagram: false,
  })
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const createJob = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to create job')
      onCreated?.(data)
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={createJob} className="grid gap-4">
      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm text-white/80 mb-1">Subreddit</label>
          <input name="subreddit" value={form.subreddit} onChange={handleChange} className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Keyword (optional)</label>
          <input name="keyword" value={form.keyword} onChange={handleChange} className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Voice</label>
          <select name="voice" value={form.voice} onChange={handleChange} className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2">
            <option value="female-soft">Female — Soft</option>
            <option value="female-energetic">Female — Energetic</option>
            <option value="male-calm">Male — Calm</option>
            <option value="male-dramatic">Male — Dramatic</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm text-white/80 mb-1">Aspect Ratio</label>
          <select name="aspect_ratio" value={form.aspect_ratio} onChange={handleChange} className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2">
            <option value="9:16">9:16 Vertical</option>
            <option value="1:1">1:1 Square</option>
            <option value="16:9">16:9 Landscape</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input id="captions" type="checkbox" name="include_captions" checked={form.include_captions} onChange={handleChange} className="accent-purple-500" />
          <label htmlFor="captions" className="text-white/90">Burn captions</label>
        </div>
        <div className="flex items-center gap-2">
          <input id="broll" type="checkbox" name="include_broll" checked={form.include_broll} onChange={handleChange} className="accent-purple-500" />
          <label htmlFor="broll" className="text-white/90">Add b-roll & sfx</label>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <div className="flex items-center gap-2">
          <input id="yt" type="checkbox" name="autopost_youtube" checked={form.autopost_youtube} onChange={handleChange} className="accent-purple-500" />
          <label htmlFor="yt" className="text-white/90">Auto-post to YouTube</label>
        </div>
        <div className="flex items-center gap-2">
          <input id="tt" type="checkbox" name="autopost_tiktok" checked={form.autopost_tiktok} onChange={handleChange} className="accent-purple-500" />
          <label htmlFor="tt" className="text-white/90">Auto-post to TikTok</label>
        </div>
        <div className="flex items-center gap-2">
          <input id="ig" type="checkbox" name="autopost_instagram" checked={form.autopost_instagram} onChange={handleChange} className="accent-purple-500" />
          <label htmlFor="ig" className="text-white/90">Auto-post to Instagram</label>
        </div>
      </div>

      <button disabled={loading} className="mt-2 px-5 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition disabled:opacity-50">
        {loading ? 'Creating…' : 'Create Job'}
      </button>
    </form>
  )
}
