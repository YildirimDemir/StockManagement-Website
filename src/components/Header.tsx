import React from 'react'
import Style from './header.module.css'
import { FaBoxes, FaClipboardList, FaWarehouse } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={Style.headerArea}>
      <div className={Style.icons}>
        <FaBoxes className={Style.icon}/>
        <FaClipboardList className={Style.icon}/>
        <FaWarehouse className={Style.icon}/>
      </div>
      <div className={Style.headerContent}>
        <h1>Streamline Your Stock Management</h1>
        <p>Manage and organize your product stocks effortlessly</p>
        <Link href={'http://panel.localhost:3000/register'} className={Style.headerLink}>Start Now</Link>
      </div>
    </div>
  )
}