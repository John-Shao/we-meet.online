export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 font-mono text-xs font-medium text-gray-600 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Focus on AI + Audio/Video Tech
          </div>
          <h1 className="font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            探索 AI 与音视频技术的
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
              无限可能
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-gray-600">
            微密小站 (we-meet.online) 是一个深耕于 WebRTC、FFmpeg、实时音视频通讯与人工智能结合领域的独立技术博客。在这里，我们分享硬核工程实践与前沿学术落地方案。
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#latest" className="rounded-full bg-black px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-gray-800">
              开始阅读
            </a>
            <a href="#" className="font-sans text-sm font-medium text-gray-600 decoration-gray-400 decoration-2 underline-offset-4 hover:underline transition-all">
              订阅 RSS
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
    </div>
  );
}
