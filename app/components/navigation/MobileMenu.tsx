import { Link } from "react-router";
import { navLinks } from "~/data/navigation";
import type { NavLink } from "~/types/components";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export function MobileMenu({ isOpen, onClose, isDark, onToggleDark }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <span className="text-white font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((item: NavLink) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="text-slate-300 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <div className="absolute bottom-8 left-6 right-6">
          <button
            onClick={onToggleDark}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </>
  );
}