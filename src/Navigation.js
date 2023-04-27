import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <nav >
        <Link to='./Home'>Home</Link><br/>
        <Link to='./About'>About</Link><br/>
        <Link to='./contact'>Contact us</Link><br/>
        <Link to='./UserProfile'>User</Link><br/>
        <Link to='./Blog/PostId'>Blog</Link><br/>
        
      </nav> 
    </>
  );
}
