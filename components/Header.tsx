"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const pages = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "careers", path: "/careers" },
    { name: "contact", path: "/contact" },
  ];

  const isActivePage = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base sm:text-xl">
                APEX
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-blue-900">
                APEX ENERGY ENGINEERING & INFRASTRUCTURES LTD
              </h1>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-1">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className={`px-6 py-3 text-sm font-medium capitalize transition-all rounded-lg block ${
                      isActivePage(page.path)
                        ? "bg-blue-900 text-white shadow-lg"
                        : "text-gray-700 hover:bg-blue-100"
                    }`}
                  >
                    {page.name === "contact" ? "Contact Us" : page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${mobileMenuOpen ? "block" : "hidden"} lg:hidden pb-4`}
        >
          <ul className="flex flex-col gap-2">
            {pages.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full px-4 py-3 text-sm font-medium capitalize transition-all rounded-lg text-left block ${
                    isActivePage(page.path)
                      ? "bg-blue-900 text-white shadow-lg"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {page.name === "contact" ? "Contact Us" : page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
