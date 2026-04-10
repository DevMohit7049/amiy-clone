import { useState, useEffect } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navMenus = [
    {
      name: 'Shop',
      href: '#shop',
      hasDropdown: true,
      submenu: [
        { name: 'All Products', href: '#' },
        { name: 'Best Sellers', href: '#' },
        { name: 'New Arrivals', href: '#' },
      ],
    },
    {
      name: 'Our Combos',
      href: '#combos',
      hasDropdown: true,
      submenu: [
        { name: 'Combo 1', href: '#' },
        { name: 'Combo 2', href: '#' },
        { name: 'Combo 3', href: '#' },
      ],
    },
    {
      name: 'Our Trios',
      href: '#trios',
      hasDropdown: true,
      submenu: [
        { name: 'Trio 1', href: '#' },
        { name: 'Trio 2', href: '#' },
        { name: 'Trio 3', href: '#' },
      ],
    },
    {
      name: 'Ingredients',
      href: '#ingredients',
      hasDropdown: true,
      submenu: [
        { name: 'Natural Ingredients', href: '#' },
        { name: 'Organic Products', href: '#' },
        { name: 'Benefits', href: '#' },
      ],
    },
    {
      name: 'Contact Us',
      href: '#contact',
      hasDropdown: false,
    },
    {
      name: 'From the Manufacturers',
      href: '#manufacturers',
      hasDropdown: false,
    },
    {
      name: 'Skin Code Test',
      href: '#skintest',
      hasDropdown: false,
    },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className="font-heading text-2xl font-bold text-primary tracking-wide">
                amiy
              </span>
            </a>

            {/* Top Right Menu - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#signin" className="text-text-dark hover:text-primary text-sm font-normal transition-colors">
                Sign in
              </a>
              <span className="text-text-light">|</span>
              <a href="#rewards" className="text-text-dark hover:text-primary text-sm font-normal transition-colors">
                Smart Rewards
              </a>
              <span className="text-text-light">|</span>
              <a href="#help" className="text-text-dark hover:text-primary text-sm font-normal transition-colors">
                Help Center
              </a>
              <span className="text-text-light">|</span>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              {/* Cart icon */}
              <button className="p-2 text-text-dark hover:text-primary transition-colors relative" aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                  0
                </span>
              </button>

              {/* Search icon */}
              <button className="p-2 text-text-dark hover:text-primary transition-colors" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-text-dark hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Strip with Sliding Animation */}
      <div className="bg-bg-strip text-white py-3 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block animate-slide whitespace-nowrap">
            <span className="text-sm md:text-base font-body">
              Get Free personalized expert session worth ₹2,500 on all orders!
            </span>
            <span className="mx-8">•</span>
            <span className="text-sm md:text-base font-body">
              Get Free personalized expert session worth ₹2,500 on all orders!
            </span>
          </div>
        </div>
        <style>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-slide {
            display: inline-block;
            animation: slide 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:block bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {navMenus.map((menu) => (
              <div key={menu.name} className="relative group flex-1">
                <a
                  href={menu.href}
                  className="text-text-dark hover:text-primary text-sm font-normal py-4 transition-colors flex items-center justify-center gap-2 block"
                  onMouseEnter={() => menu.hasDropdown && setOpenDropdown(menu.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {menu.name}
                  {menu.hasDropdown && (
                    <i className="fas fa-angle-down text-xs text-text-gray"></i>
                  )}
                </a>

                {/* Dropdown Menu */}
                {menu.hasDropdown && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40"
                    onMouseEnter={() => setOpenDropdown(menu.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {menu.submenu?.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-text-dark hover:text-primary hover:bg-primary-light text-sm font-normal transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-b border-border overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {/* Mobile top menu */}
          <div className="flex flex-col gap-3 pb-4 border-b border-border md:hidden">
            <a href="#signin" className="text-text-dark hover:text-primary text-sm font-normal">
              Sign in
            </a>
            <a href="#rewards" className="text-text-dark hover:text-primary text-sm font-normal">
              Smart Rewards
            </a>
            <a href="#help" className="text-text-dark hover:text-primary text-sm font-normal">
              Help Center
            </a>
          </div>

          {/* Mobile nav menu */}
          {navMenus.map((menu) => (
            <div key={menu.name}>
              <button
                className="w-full text-left text-text-dark hover:text-primary text-sm font-normal py-2 flex items-center justify-between"
                onClick={() => setOpenDropdown(openDropdown === menu.name ? null : menu.name)}
              >
                {menu.name}
                {menu.hasDropdown && (
                  <i className={`fas fa-angle-down text-xs bg-bg-strip transition-transform ${openDropdown === menu.name ? 'rotate-180' : ''}`}></i>
                )}
              </button>

              {menu.hasDropdown && openDropdown === menu.name && (
                <div className="pl-4 space-y-2 py-2">
                  {menu.submenu?.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-text-gray hover:text-primary text-sm font-normal py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
