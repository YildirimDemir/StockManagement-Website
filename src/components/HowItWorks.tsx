import React from 'react'
import Style from './howitworks.module.css'
import imageOne from '../../public/images/ss-1.png'
import imageTwo from '../../public/images/ss-2.png'
import Image from 'next/image'
import ContentTitle from './ui/ContentTitle'

export default function HowItWorks() {

  return (
    <div className={Style.howItWorksArea}>
      <ContentTitle>How It Works</ContentTitle>

      <div className={Style.container}>
        <div className={Style.imageBox}>
          <Image className={Style.img} src={imageOne} alt=''/>
        </div>
        <div className={Style.contentBox}>
          <p>Stox empowers you to take full control of your inventory. Start by creating your account and selecting the subscription plan that fits your needs. Once you're in, build personalized stock lists to categorize your products efficiently. Easily add detailed product information such as quantity, color, and more—everything you need to stay organized and in control.</p>
        </div>
      </div>

      <div className={Style.container}>
        <div className={Style.imageBox}>
          <Image className={Style.img} src={imageTwo} alt=''/>
        </div>
        <div className={Style.contentBox}>
          <p>Keep your inventory up to date with real-time updates. Adjust quantities, edit product details, and track changes instantly. Whether you’re managing a small collection or a vast inventory, Stox simplifies the process, saving you time and boosting productivity. Take charge today and watch your business thrive with seamless stock management.</p>
        </div>
      </div>

    </div>
  )
}
