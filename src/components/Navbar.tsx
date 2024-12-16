import React from 'react'
import Style from './navbar.module.css';
import Image from 'next/image';
import logo from '../../public/images/stox-logo.png'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={Style.navbar}>
      <div className={Style.logo}>
        <Image className={Style.imgLogo} src={logo} alt='' height={70} width={70}/>
      </div>
      <div className={Style.authLink}>
        <Link className={Style.loginLink} href={'http://manage.localhost:3000/login'}>Login</Link>
        <span className={Style.span}>|</span>
        <Link className={Style.registerLink} href={'http://manage.localhost:3000/register'}>Start Now</Link>
      </div>
    </div>
  )
}
