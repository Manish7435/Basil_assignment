import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Search from '../Search'

function Topbar({onChange, value}) {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            All Orders
        </div>
        <div className={styles.right}>
            <Search onChange={onChange} value={value}/>
            <div className={styles.bell}> <Image src={'/Bell.svg'} height={30} width={30} alt='order'/></div>
            <div className={styles.avatar}> <Image src={'/Avatar.svg'} height={30} width={30} alt='order'/></div>
        </div>
    </div>
  )
}

export default Topbar