/** @format */

import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <ul className=''>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href='/services/services'>
          <a>Services</a>
        </Link>
      </li>
    </ul>
  );
};

export default header;
