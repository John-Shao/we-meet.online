import { Github, Mail, Terminal } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg bg-black p-1.5 text-white">
            <Terminal size={20} />
          </div>
          <span className="font-sans text-lg font-bold tracking-tight text-gray-900">
            we-meet.online
          </span>
          <span className="ml-2 hidden rounded-full bg-gray-100 px-2 py-0.5 font-mono text-xs font-medium text-gray-600 sm:inline-flex">
            微密小站
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-gray-600">
          <a href="#" className="text-black transition-colors">最新文章</a>
          <a href="#" className="hover:text-black transition-colors">AI 视界</a>
          <a href="#" className="hover:text-black transition-colors">WebRTC</a>
          <a href="#" className="hover:text-black transition-colors">工程实践</a>
          <a href="#" className="hover:text-black transition-colors">关于</a>
        </nav>

        <div className="flex items-center gap-4 text-gray-500">
          <a href="#" className="hover:text-black transition-colors"><Github size={18} /></a>
        </div>
      </div>
    </header>
  );
}
