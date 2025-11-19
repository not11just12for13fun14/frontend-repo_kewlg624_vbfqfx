export default function HowItWorks() {
  const steps = [
    {
      title: 'Pick a story source',
      text: 'Choose a subreddit, paste a Reddit link, or enter a topic keyword.',
    },
    {
      title: 'AI writes & narrates',
      text: 'We summarize the post, generate a voiceover, and craft on-screen captions.',
    },
    {
      title: 'Auto-edit for Shorts',
      text: 'Perfect vertical framing, dynamic captions, and optional b-roll/sfx.',
    },
    {
      title: 'Auto-post everywhere',
      text: 'Publish to YouTube Shorts, TikTok, and Instagram Reels automatically.',
    },
  ]

  return (
    <section id="how" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How it works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-200 flex items-center justify-center mb-3">{i+1}</div>
              <p className="text-white font-medium">{s.title}</p>
              <p className="text-white/70 text-sm mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
