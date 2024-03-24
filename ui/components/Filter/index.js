import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Filter({handleOnClick,handleClearAll}){

    const [selectedStatus, setSelectedStatus] = useState(['Failure', 'Success', 'Initialized','Pending', 'Sent'])
    const [selectedMachines, setSelectedMachines] = useState([])

    const filterOptions = {'Date From': ['21/03/2024'], 'Date To':['21/03/2024'], 'Status': selectedStatus, 'Machines': selectedMachines}


    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                FILTERS
            </div>
            <div className={styles.filter_option}>
                <div className={styles.select} onClick={handleOnClick}>
                    Select Filters
                </div>
                <div className={styles.clear_all} onClick={handleClearAll}>
                    Clear All
                </div>
            </div>
            {Object.entries(filterOptions).map(([key, value])=>{
                return(<div className={styles.filter_applied} key={key}>
                        <div className={styles.option_name}>
                            {key}: {value.map((item)=>{
                                return(<span key={item} className={styles.all_options}>{item}  <Image src={'/cross.svg'} alt='cross' height={16} width={16} className={styles.cross} /></span>)
                            })}
                        </div>
                </div>)
            })}
        </div>
    )
}