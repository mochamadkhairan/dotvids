import { Link } from "react-router";
import { Icon } from "~/components/common";
import { footerLinks, socialLinks } from "~/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-50">
      <div className="border-t border-slate-800">
        {/* Main Footer Content */}
        <div className="container-max px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Brand Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center group">
                <img
                  src="/logo.png"
                  alt="DotVids Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting premium digital experiences through innovative design and technology.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon
                      name={social.platform}
                      size="md"
                      color="currentColor"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.label}>
                <h3 className="font-semibold text-gray-50 mb-4 text-sm uppercase tracking-wider">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-12" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} DotVids. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
