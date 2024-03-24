import React from 'react'
import styles from './styles.module.css'
import Table from './Table'

const details = [
    {
        heading: 'BASIC INFORMATION',
        sub_headings: [ 
            {
                sub_heading: 'Date and Time',
                sub_heading_detail: '21 / 03 / 2023 ; 13:58:21 PM'
            },
            {
                sub_heading: 'Machine',
                sub_heading_detail: 'Aahaar Stall 3 (WH101)'
            }],
        
    },
    {
        heading: 'ORDER SUMMARY',
        sub_headings: [ 
            {
                sub_heading: 'Payment ID',
                sub_heading_detail: 'TX1042480129481'
            },
            {
                sub_heading: 'Total Amount',
                sub_heading_detail: '796'
            }],
        
    },
    {
        heading: 'REFUND INFORMATION',
        sub_headings: [ 
            {
                sub_heading: 'Refund Transaction ID',
                sub_heading_detail: 'TX1042480129481'
            },
           ],
        
    }
]

function OrderDetail({data}) {
  return (
    <div className={styles.outer_container}>
        <div className={styles.container}>
            <div className={styles.order_detail}>
                <div className={styles.order_id}>OD101</div>
                <div className={styles.status}>success</div>
            </div>
            {details.map((item)=>{
                return(
                    <div key={item.heading} className={styles.heading_container}>
                            <div className={styles.heading}>{item.heading}</div>
                                <div  className={styles.sub_heading_container}>
                                    {item.sub_headings.map((sub_detail)=>{
                                        return(
                                            <div key={sub_detail.sub_heading} className={styles.sub}>
                                                <div  className={styles.sub_heading}>{sub_detail.sub_heading}</div>
                                                <div className={styles.sub_heading_detail}>{sub_detail.sub_heading_detail}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>)
                        })}
        </div>
        <div className={styles.right_side}>
                <Table data={data}/>
        </div>
    </div>
  )
}

export default OrderDetail