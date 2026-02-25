export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Shairidge</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your professional financial advisors and business consultants
        </p>
        <div className="space-y-4">
          <p>Home page coming soon...</p>
          <nav className="space-y-2">
            <a href="/services" className="block text-blue-600 hover:underline">
              Services
            </a>
            <a href="/team" className="block text-blue-600 hover:underline">
              Team
            </a>
            <a href="/contact" className="block text-blue-600 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </main>
  )
}
