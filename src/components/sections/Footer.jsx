export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-text-muted font-body text-xs">
        <p>© {new Date().getFullYear()} Akash Barman</p>
        <p>Built with React, Three.js &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
