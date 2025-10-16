"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "../layout/Container";
import { navLinks, serviceItems } from "../data/HeaderData";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const dropdownRef = useRef(null);
  const serviceRef = useRef(null);

  const pathname = usePathname();

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/tmgglobals/",
      label: "Instagram",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        serviceRef.current &&
        !serviceRef.current.contains(event.target)
      ) {
        setIsServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 py-4 sm:py-6 md:py-3 fixed transition-all duration-300 ${
        isScrolled
          ? "border-2 border-b-0 border-gray-200 bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between lg:justify-start lg:gap-[11rem] xl:gap-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/logo/logo.png"
              alt="Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-20 xl:h-[6.563rem] w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex rounded-2xl flex-1 max-w-4xl px-4 xl:px-8 py-2 xl:py-3 transition-all duration-300 ${
              isScrolled
                ? "bg-white/90 backdrop-blur-sm shadow-lg"
                : "bg-white/70 backdrop-blur-sm shadow-md"
            }`}
          >
            <ul className="flex items-center justify-center w-full gap-4 xl:gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <li key={link.href} className="relative" ref={serviceRef}>
                      <button
                        onMouseEnter={() => setIsServiceOpen(true)}
                        onClick={() => setIsServiceOpen(!isServiceOpen)}
                        className={`flex items-center gap-1 text-sm xl:text-base text-center font-normal transition-colors hover:text-red-800 whitespace-nowrap ${
                          isActive
                            ? "text-red-800 border-b-2 border-red-800 pb-1"
                            : "text-gray-700"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isServiceOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm xl:text-base text-center font-normal transition-colors hover:text-red-800 whitespace-nowrap ${
                        isActive
                          ? "text-red-800 border-b-2 border-red-800 pb-1"
                          : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-800 transition-colors bg-white/90 backdrop-blur-sm rounded-lg shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Service Dropdown */}
        {isServiceOpen && (
          <div
            ref={dropdownRef}
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
            className="hidden lg:block absolute left-0 right-0 mt-8 px-4"
          >
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-4 gap-6">
                {serviceItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsServiceOpen(false)}
                    className="group flex items-center justify-between text-white hover:text-red-200 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    <span className="text-sm font-normal">{item.title}</span>
                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
            <ul className="py-2">
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                const isFirstItem = index === 0;

                if (link.hasDropdown) {
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() =>
                          setIsMobileServiceOpen(!isMobileServiceOpen)
                        }
                        className={`flex items-center justify-between w-full px-6 py-3 text-base font-normal transition-colors hover:bg-red-50 hover:text-red-800 ${
                          isActive
                            ? "text-red-800 bg-red-50 border-l-4 border-red-800"
                            : "text-gray-700"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            isMobileServiceOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Service Submenu */}
                      {isMobileServiceOpen && (
                        <div className="bg-red-50/50 border-l-4 border-red-800">
                          {serviceItems.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileServiceOpen(false);
                              }}
                              className="flex items-center justify-between px-10 py-2.5 text-sm text-gray-700 hover:text-red-800 hover:bg-red-100 transition-colors group"
                            >
                              <span>{item.title}</span>
                              <ArrowRight
                                size={14}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              />
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 text-base font-normal transition-colors hover:bg-red-50 hover:text-red-800 ${
                        isActive || isFirstItem
                          ? "text-red-800 bg-red-50 border-l-4 border-red-800"
                          : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Social Media Icons */}
            <div className="border-t border-gray-200 px-6 py-4">
              <p className="text-sm text-gray-600 mb-3 font-medium">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
