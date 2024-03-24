import React from 'react'
import Navebar from '@/ui/components/Navebar'
import styles from './styles.module.css'

function Layout({children}) {
  return (
    <div className={styles.container}>
        <Navebar/>
        {children}
    </div>
  )
}

export default Layout