import React from 'react';
import styles from './styles.module.css'

export default function Table({data=[]}) {
    const headings = ['DATE','ORDER ID','MACHINE NAME','CUSTOMER NAME','CONTACT NUMBER','TOTAL AMOUNT','STATUS']

    return (
      <table className={styles.container}>
        <thead >
          <tr className={styles.head}>
            <th className={styles.col_head_srn}>S.NO.</th>
            {headings.map((heading)=>{
                return(<th key={heading} className={styles.col_head}>{heading}</th>)
            })}
          </tr>
        </thead>
        <tbody >
            {data.map((item,index)=>{
            return(<tr key={item.index} className={styles.table_row}>
                <td className={styles.row_item}>{index+1}</td>
                <td className={styles.row_item}>{item.date}</td>
                <td className={styles.row_item}>{item.order_id}</td>
                <td className={styles.row_item}>{item.machine_name}</td>
                <td className={styles.row_item}>{item.customer_name}</td>
                <td className={styles.row_item}>{item.contact_number}</td>
                <td className={styles.row_item}>{item.total_ammount}</td>
                {item.status ==='SUCCESS' &&  <td ><span className={styles.status_success}>{item.status}</span></td>}
                {item.status ==='REFUND INITIATED' &&  <td ><span className={styles.status_initiated}>{item.status}</span></td>}
                {item.status ==='FAILURE' &&  <td ><span className={styles.status_failure}>{item.status}</span></td>}
                {item.status ==='REFUND COMPLETED' &&  <td className={styles.td_complete} ><span className={styles.status_refcomplete}>{item.status}</span></td>}
                {item.status ==='PENDING' &&  <td ><span className={styles.status_pending}>{item.status}</span></td>}
                {item.status ==='SENT' &&  <td ><span className={styles.status_sent}>{item.status}</span></td>}
            </tr>)
            })}
        </tbody>
      </table>
    );

}

