const footerLinks = [
  {label: 'GITHUB',link:"https://github.com/Litezy"},
  {label: 'LINKEDIN',link:''},
  {label: 'TWITTER',link:"https://x.com/_belziee"},
  {label: 'READCV'}
]

interface FooterProps {
  showNode?: boolean
}

export default function Footer({ showNode = false }: FooterProps) {
  return (
    <footer className="border-t border-[#252525] flex items-center justify-between px-10 py-5 flex-wrap gap-4">
      <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#555]">
        © {new Date().getFullYear()} KINETIC ARCHITECT. ENGINEERED FOR THE VOID.
      </span>
      <div className="flex gap-6">
        {footerLinks.map(item => (
          <button
            key={item.link}
            className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#555] hover:text-text transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
      {showNode && (
        <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#555] flex items-center gap-1.5">
          <span className="status-dot" />
          NODE_01_ONLINE
        </div>
      )}
    </footer>
  )
}