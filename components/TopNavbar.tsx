import Link from 'next/link';

export default function TopNavbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-lg font-semibold">Titanic</Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/psychotherapy" className="text-sm text-gray-600 hover:text-gray-800">Psychotherapy</Link>
            <Link href="/project" className="text-sm text-gray-600 hover:text-gray-800">Project</Link>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-700">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
