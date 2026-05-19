export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="font-sans text-lg font-bold tracking-tight text-gray-900">
              we-meet.online
            </span>
            <span className="font-sans text-sm text-gray-500">
              专注 AI + 音视频技术的独立博客
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 font-mono text-xs text-gray-500">
            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2">
              <p>&copy; {new Date().getFullYear()} 微密小站</p>
              <span className="hidden sm:inline-block text-gray-300">|</span>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                粤ICP备2026059572号-1
              </a>
            </div>
            <div className="hidden sm:flex gap-4">
              <a href="#" className="hover:text-gray-900">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
