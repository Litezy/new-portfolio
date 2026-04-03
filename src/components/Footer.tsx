const footerLinks = [
  {label: 'GITHUB',link:"https://github.com/Litezy"},
  {label: 'LINKEDIN',link:'https://www.linkedin.com/in/belziee/'},
  {label: 'TWITTER',link:"https://x.com/_belziee"},
]

interface FooterProps {
  showNode?: boolean
}

export default function Footer({ showNode = false }: FooterProps) {
  return (
    <footer className="border-t border-[#252525] flex items-center justify-between px-10 py-5 flex-wrap gap-4">
      <div className="flex gap-6">
        {footerLinks.map(item => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.12em] uppercase text-[#555] hover:text-text transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            {item.label}
          </a>
        ))}
      </div>
      {showNode && (
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#555] flex items-center gap-1.5">
          <span className="status-dot" />
          NODE_01_ONLINE
        </div>
      )}
    </footer>
  )
}