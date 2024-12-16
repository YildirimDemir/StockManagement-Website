import React from 'react'
import Style from './plans.module.css'
import ContentTitle from './ui/ContentTitle'
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

export default function Plans() {
  return (
    <div className={Style.plansArea}>
      <ContentTitle>Plans</ContentTitle>
      <div className={Style.plansContainer}>
        <div className={Style.planBox}>
          <h3>FREE</h3>
          <h4>$0/mo</h4>
          <p><FaCheck /> 1 User</p>
          <p><FaCheck /> Max 5 Stock List</p>
          <p><FaCheck /> Max 20 Items in Stock List</p>
          <p><FaCheck /> 5 GB Storage Space</p>
          <p><FaCheck /> Basic Stock Management</p>
          <Link className={Style.startNow} href={'http://manage.localhost:3000/register'}>Start Now</Link>
        </div>
        <div className={Style.planBox}>
          <div className={Style.mostPopular}>
            <span>Most Popular</span>
          </div>
          <h3>PRO</h3>
          <h4>$19/mo</h4>
          <p><FaCheck /> 3 User</p>
          <p><FaCheck /> Max 30 Stock List</p>
          <p><FaCheck /> Max 100 Items in Stock List</p>
          <p><FaCheck /> 20 GB Storage Space</p>
          <p><FaCheck /> Basic Stock Management</p>
          <Link className={Style.startNow} href={'http://manage.localhost:3000/register'}>Start Now</Link>
        </div>
        <div className={Style.planBox}>
          <h3>BUSINESS</h3>
          <h4>$50/mo</h4>
          <p><FaCheck /> Unlimited User</p>
          <p><FaCheck /> Unlimited Stock List</p>
          <p><FaCheck /> Unlimited Items in Stock List</p>
          <p><FaCheck /> 50 GB Storage Space</p>
          <p><FaCheck /> All Advanced Features</p>
          <p><FaCheck /> Priority Support</p>
          <Link className={Style.startNow} href={'http://manage.localhost:3000/register'}>Start Now</Link>
        </div>
      </div>
    </div>
  )
}
