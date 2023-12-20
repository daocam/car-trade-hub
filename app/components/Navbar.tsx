"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";

interface LinkProps {
  name: string,
  href: string
}

const links: LinkProps[] = [
  { 
    name: "Home",
    href: "/home" 
  },
  {
    name: "Cars",
    href: "/cars"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Contact",
    href: "/contact"
  }
]

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-7xl mx-auto py-5 border stroke-border">
      <nav className="flex items-center justify-between">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="CarTradeHub logo" priority/>
        </Link>
        <ul className="flex gap-x-8 ml-14 ">
          {
            links.map((link, id) => (
              <div key={id}>
                {pathname === link.href ? (
                  <li>
                    <Link
                      href={link.href}
                      className="underline font-bold text-lg"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={link.href}
                      className="font-bold text-lg"
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar