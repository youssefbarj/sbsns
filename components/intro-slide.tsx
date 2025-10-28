import MicrobladingSlider from "./microblading-slider"

export default function IntroSlide() {
  return (
    <div className="min-h-screen p-8 pt-0" style={{ backgroundColor: "#ded8fd" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Interactive slider */}
        <div className="flex flex-col justify-center">
          <div className="w-full max-w-lg mx-auto">
            <MicrobladingSlider />
          </div>
        </div>

        {/* Right side - Course content */}
        <div className="text-slate-800 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Professional
            <br />
            <span className="text-slate-900">Eyelash Extensions</span>
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Watch this transformation: from natural lashes to spectacular volume extensions that reveal the full
              intensity of your gaze.
            </p>

            <p>
              Professional eyelash extensions allow you to achieve a look that's both dramatic and natural,
              with techniques adapted to every eye shape and desired style.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">In this module, you will learn to:</h2>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                    Master 2 main techniques with practical videos (Classic Technique + Russian Volume)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span> Discover 3 advanced techniques (3D/Hybrid Volume, doe eye, open eye)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Perform eye mapping and choose the appropriate technique</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Apply the 17-step application protocol</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Understand contraindications and aftercare advice</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
