import { siteConfig } from "@/data/portfolio";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-white/30">
            {siteConfig.footerTagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/30">© {siteConfig.copyright}</p>
      </div>
    </footer>
  );
}
