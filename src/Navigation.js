import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <nav>
        <Link to='./Home'>Home</Link>
        <Link to='./About'>About</Link>
        <Link to='./contact'>Contact us</Link>
        <Link to='./UserProfile'>User</Link>
        <Link to='./Blog/PostId'>Blog</Link>
        
      </nav> 
    </>
  );
}
