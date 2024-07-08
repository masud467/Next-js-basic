'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    const router= useRouter();
  const Links = [
    {
      title: "About",
      path: "/aboutme",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blogs",
    },
  ];
  
  const handler=()=>{
    router.push('/login')
  }
  return (
    <nav className="bg-orange-500 flex justify-between items-center py-5 px-8">
      <h4 className="text-3xl font-medium">
        Next <span className="text-indigo-900">Js Basic</span>
      </h4>
      <ul className="flex justify-between items-center space-x-4">
        {Links.map((link) => (
          <Link className={`${pathName===link.path && 'text-indigo-900'}`} key={link.path} href={link.path}>
            {link.title}
          </Link>
        ))}
      </ul>
      <button onClick={handler} className="bg-white text-cyan-500 px-5 py-2 rounded-md">login</button>
    </nav>
  );
};

export default Navbar;
