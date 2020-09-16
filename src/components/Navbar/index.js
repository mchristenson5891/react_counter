import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <Link href='/'>
        <a>HOME </a>
      </Link>
      <Link href='/signup'>
        <a>SIGNUP </a>
      </Link>
      <Link href='/login'>
        <a>LOGIN </a>
      </Link>
    </div>
  );
}

export default Navbar;
