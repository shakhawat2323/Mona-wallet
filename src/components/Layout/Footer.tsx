import Logo from "@/assets/Icons/Logo";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-8 py-16 space-y-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Logo + Brand */}
          <div>
            <div className="text-foreground">
              <div className="h-8 w-8">
                <Logo  />
              </div>
            </div>

            <div className="flex flex-row gap-2 mt-3">
              <Link
                to="/"
                className="text-2xl font-extrabold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 leading-[0.9] "
              >
                Mona
              </Link>
              <span className="text-yellow-400  text-2xl font-extrabold bg-gradient-to-r w-full from-pink-500 via-purple-500 to-indigo-500 bg-clip-text  hover:scale-105 transition-transform duration-300 leading-[0.9] ">
                Wallet
              </span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              The next-generation digital wallet for secure payments, instant
              transfers, and global access to your money.
            </p>

            {/* Social Links */}
            <ul className="mt-6 flex gap-6">
              {[
                { name: "Facebook", href: "#", icon: "M22 12c0..." },
                { name: "Instagram", href: "#", icon: "M12.315 2c2.43..." },
                { name: "Twitter", href: "#", icon: "M8.29 20.251..." },
                { name: "GitHub", href: "#", icon: "M12 2C6.477..." },
                { name: "Dribbble", href: "#", icon: "M12 2C6.48..." },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <span className="sr-only">{item.name}</span>
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path to={item.icon} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-foreground">Products</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Digital Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Crypto Transfers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Virtual Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Payment Gateway
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">Company</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">Support</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">Legal</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mona Wallet. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Powered by secure blockchain technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
