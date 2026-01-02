export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </div>
        <div className="flex gap-6 text-zinc-400 text-sm">
          <a href="https://github.com/yourusername" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://twitter.com/yourusername" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}