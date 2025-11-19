import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
          AI Reddit-to-Shorts Automation
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Turn viral Reddit stories into edited, captioned Shorts with AI voiceover — then auto-post to YouTube, TikTok and Instagram.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#builder" className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Create Video</a>
          <a href="#how" className="px-5 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition">How it works</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_60%)]" />
    </section>
  )
}
