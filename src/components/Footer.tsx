import React from "react";
import { IconBrandInstagram, IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import { Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-background  w-full flex text-card-foreground border-t border-border mt-10 md:mt-20">
      <div className=" mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <span className="inline-block text-teal-600">🐾</span>
              PickPawz
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground">Finding loving homes for pets in need since 2023.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="p-2 bg-card-foreground/10 rounded-full text-teal-600 hover:bg-card-foreground/20">
                <IconBrandInstagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 bg-card-foreground/10 rounded-full text-teal-600 hover:bg-card-foreground/20">
                <IconBrandFacebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-card-foreground/10 rounded-full text-teal-600 hover:bg-card-foreground/20">
                <IconBrandTwitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-card-foreground mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-teal-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Adopt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-card-foreground mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-teal-600">
                  Pet Care Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Adoption Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-card-foreground mb-3 sm:mb-4">Contact Us</h4>
            <div className="text-xs sm:text-sm text-muted-foreground space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="break-all">hello@pickpawz.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:my-8 border-border" />

        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} PickPawz. All rights reserved.</div>
          <div className="mt-2 text-teal-600 font-medium">Adopt. Don't Shop.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

