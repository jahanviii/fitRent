// "use client";
// import React, { useState } from "react";
// import { Menu, MenuItem } from "./ui/navbar-menu";
// import { cn } from "@/utils/cn";
// import Link from "next/link";
// import {useCart} from '../contexts/CartContext'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);

//   // Inside Navbar component
//   const { cart } = useCart(); // This will work only if Navbar is inside CartProvider
  
//   return (
//     <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//       <Menu setActive={setActive}>
//         <Link href={"/"}>
//           <MenuItem setActive={setActive} active={active} item="Home" />
//         </Link>
//         <Link href={"/listing"}>
//           <MenuItem setActive={setActive} active={active} item="Equipments" />
//         </Link>
//         <Link href={"/about"}>
//           <MenuItem setActive={setActive} active={active} item="About us" />
//         </Link>
//         <Link href={"/contact"}>
//           <MenuItem setActive={setActive} active={active} item="Contact" />
//         </Link>
//         {cart.length > 0 && (
//           <Link href={"/cart"}>
//             <MenuItem setActive={setActive} item="Cart" active={active}>
//               <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-gray-800" />
//               <span className="ml-2">{cart.length}</span>
//             </MenuItem>
//           </Link>
//         )}
//         <Link href={"/login"}>
//           <MenuItem setActive={setActive} item="Login" active={active} />
//         </Link>
//       </Menu>
//     </div>
//   );
// }

// export default Navbar;
// app/components/Navbar.tsx
"use client";
import  { useState } from 'react';
import { Menu, MenuItem } from './ui/navbar-menu';
import Link from 'next/link';
// import {useCart} from '../contexts/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  // const { cart } = useCart();

  return (
    <div className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}>
      <Menu setActive={setActive}>
        <Link href="/"> <MenuItem setActive={setActive} active={active} item="Home" /> </Link>
        <Link href="/listing"> <MenuItem setActive={setActive} active={active} item="Equipments" /> </Link>
        {/* <Link href="/about"> <MenuItem setActive={setActive} active={active} item="About us" /> </Link> */}
        {/* <Link href="/contact"> <MenuItem setActive={setActive} active={active} item="Contact" /> </Link> */}
       
         
        <Link href="/login"> <MenuItem setActive={setActive} item="Login" active={active} /> </Link>
        <Link href="/cart" >
              <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-gray-800" />
          </Link>
      
      </Menu>
    </div>
  );
}

export default Navbar;
