import React from 'react';
import styles from './styles.module.css'

export default function Table({data=[]}) {
    const headings = ['ID','DRINK NAME','CUSTOMISATION','AMOUNT','DRINK STATUS','ACTION']

    return (
      <table className={styles.container}>
        <thead >
          <tr className={styles.head}>
            {headings.map((heading)=>{
                return(<th key={heading} className={styles.col_head}>{heading}</th>)
            })}
          </tr>
        </thead>
        <tbody >
            {data.map((item)=>{
            return(<tr key={item.index} className={styles.table_row}>
                <td className={styles.row_item}>{item.drink_id}</td>
                <td className={styles.row_item}>{item.drink_name}</td>
                <td className={styles.row_item}>{item.customization}</td>
                <td className={styles.row_item}>{item.amount}</td>
                {(item.status ==='SUCCESS' &&  item.drink_id)&& <td ><span className={styles.status_success}>{item.status}</span></td>}
                {(item.status ==='REFUND INITIATED' && item.drink_id)&& <td ><span className={styles.status_initiated}>{item.status}</span></td>}
                {(item.status ==='FAILURE' && item.drink_id)&&  <td ><span className={styles.status_failure}>{item.status}</span></td>}
                {(item.status ==='REFUND COMPLETED' && item.drink_id)&& <td className={styles.td_complete} ><span className={styles.status_refcomplete}>{item.status}</span></td>}
                {(item.status ==='PENDING' && item.drink_id)&&  <td ><span className={styles.status_pending}>{item.status}</span></td>}
                {(item.status ==='SENT' && item.drink_id)&& <td ><span className={styles.status_sent}>{item.status}</span></td>}
            </tr>)
            })}
        </tbody>
      </table>
    );

}

