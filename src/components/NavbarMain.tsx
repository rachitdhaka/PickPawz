"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router-dom";

export function NavbarMain() {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Chat",
      link: "/pricing",
    },
    {
      name: "Docs",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuthStatus = () => {
    const storedName = localStorage.getItem("firstname");
    const token = localStorage.getItem("token");

    if (storedName) {
      setName(storedName);
    }

    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    // Check auth status on mount
    checkAuthStatus();

    // Listen for custom storage events
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authStateChange", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authStateChange", handleStorageChange);
    };
  }, []);

  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("firstname");
    setIsLoggedIn(false);

    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('authStateChange'));

    navigate("/adopt/login");
  }

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={(link) => navigate(link)} />
          <div className="z-10 flex items-center gap-4">
            <ModeToggle />

            {isLoggedIn ? (
              <div>
                <NavbarButton variant="secondary" onClick={()=> navigate("/profile")}>{name}</NavbarButton>
                <NavbarButton
                  variant="logout"
                  onClick={() => logout()}
                >
                  Logout
                </NavbarButton>
              </div>
            ) : (
              <NavbarButton
                variant="secondary"
                onClick={() => navigate("/adopt/login")}
              >
                Login
              </NavbarButton>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.link);
                  setIsMobileMenuOpen(false);
                }}
                className="relative cursor-pointer text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <ModeToggle />
              {isLoggedIn ? (
                <NavbarButton
                  onClick={() => {
                    navigate("/profile");
                    setIsMobileMenuOpen(false);
                  }}
                  variant="primary"
                  className="w-full"
                >
                  {name}
                </NavbarButton>
              ) : (
                <NavbarButton
                  onClick={() => {
                    navigate("/adopt/login");
                    setIsMobileMenuOpen(false);
                  }}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
