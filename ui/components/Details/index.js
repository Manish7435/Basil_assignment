import React from 'react'
import styles from './styles.module.css'

const items = {'Machines': 6,'Orders': 28,'Customers': 28,'Drinks': 28,'TotalAmount': 23245343,'Refunds Initiated': 4}


function Details() {
  return (
    <div className={styles.container}>
        {Object.entries(items).map(([key,value])=>{
            return(
                <div key={key}>{key} : {value} </div>
            )
        })}
    </div>
  )
}

export default Details