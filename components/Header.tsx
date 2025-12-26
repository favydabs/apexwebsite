"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const pages = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about" },
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
        <div className="flex items-center justify-between lg:justify-start py-3 sm:py-4">
          {/* Logo - Always at start */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <Image
              src={logo}
              alt="Apex Logo"
              width={294}
              height={88}
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-4 xl:gap-8">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className={`px-6 py-3 text-sm font-medium capitalize transition-all rounded-lg block ${
                      isActivePage(page.path)
                        ? "bg-[#2F7876] text-white shadow-lg"
                        : "text-gray-700 hover:bg-teal-50"
                    }`}
                  >
                    {page.name === "contact" ? "Contact Us" : page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
                      ? "bg-[#2F7876] text-white shadow-lg"
                      : "text-gray-700 hover:bg-teal-50"
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