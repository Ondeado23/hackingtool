export default function Header() {
  return (
    <div className="border-b border-card-border pb-8 mb-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-accent to-pink-400 bg-clip-text text-transparent">
          HackingTool
        </h1>
        <p className="text-lg text-gray-400">
          All-in-one security & penetration testing framework
        </p>
        <p className="text-sm text-gray-500 mt-2">
          185+ tools across 20 categories for ethical hacking and security research
        </p>
      </div>
    </div>
  );
}
