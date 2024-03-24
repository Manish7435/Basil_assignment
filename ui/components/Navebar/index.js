import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
function Navebar() {

  const navItems = [
    {
      icon: <Image src={'/Basilbrand.svg'} height={30} width={30} alt='Basil'/>,
      name: 'Basil'
    },
  {
    icon: <Image src={'/Home.svg'} height={24} width={24} alt='order'/>,
    name: 'Home'
  },
  {
    icon: <Image src={'/Dining.svg'} height={24} width={24} alt='order'/>,
    name: 'Dining'
  },
  {
    icon: <Image src={'/Orders.svg'} height={36} width={36} alt='order'/>,
    name: 'Order'
  },
  {
    icon: <Image src={'/Menu.svg'} height={24} width={24} alt='Menu'/>,
    name: 'Menu'
  },
  {
    icon: <Image src={'/CookieLike.svg'} height={24} width={24} alt='CookieLike'/>,
    name: 'Menu'
  },
  {
    icon: <Image src={'/Location.svg'} height={24} width={24} alt='Location'/>,
    name: 'Location'
  },
  {
    icon: <Image src={'/Customers.svg'} height={24} width={24} alt='Customers'/>,
    name: 'Customers'
  }
]
  return (
    <div className={styles.nav_container}>
      {navItems.map((item)=>{
        return(
          <div className={styles.nav_items} key={item.name}>
            {item.icon}
          </div>
        )
      })}
    </div>
  )
}

export default Navebar