import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Search from '../Search'
import Image from 'next/image'
import machinedata from '../../../machinedata.json'


const status = [{name: 'Successful', src:'/success.svg', alt:'success' },
{name: 'Pending', src:'/pending.svg', alt:'pending' },
{name: 'Sent', src:'/sent.svg', alt:'sent' },
{name: 'Failure', src:'/failure.svg', alt:'failure' },
{name: 'Refund Inititated', src:'/refInitiated.svg', alt:'refund inititated' },
{name: 'Refund Complete', src:'/refcompleted.svg', alt:'refund complete' },
]

export default function GlobalFilter({ setSelectedMachines, selectedMachines, setShowGlobalFilter }) {

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState(machinedata)

    const selectedMachineName = machinedata.filter((machine)=>selectedMachines.includes(machine.id))
  
    const handleCheckboxSelect = (machine) => {
        if((selectedMachines || []).includes(machine?.id)){
            const data = (selectedMachines || []).filter((item)=> item !== machine?.id)
            setSelectedMachines(data)
        }else{
            setSelectedMachines((prev)=>([...prev, machine?.id]))
        }
    }

    useEffect(()=>{
        let filteredData = machinedata || []
        if(searchTerm){
            filteredData = filteredData.filter(item => item?.machine_name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setFilteredData(filteredData);
    },[searchTerm])
   
  return (
    <div className={styles.container}>
        <div className={styles.filter_text}>
            FILTER
            <Image
            src={'/redcross.svg'} 
            height={16} width={16} 
            alt='redcross' 
            className={styles.red_cross} 
            onClick={()=>setShowGlobalFilter(false)}
        />
        </div>
        
        <div >
            <input type='text' placeholder='Seach' className={styles.search_global}/>
        </div>
        <div className={styles.filter_container}>
            <div className={styles.headings}>
                <div>
                    Machines
                </div>
                <div>
                    Clear All
                </div>
            </div>
            <div className={styles.selected_machines}>
                {selectedMachineName.map((item)=>{
                    return(
                        <div key={item.id} className={styles.aahaar}>
                            {item.machine_name}
                            <Image src="/cross.svg" width={16} height={16} alt={'cross'} />
                        </div>
                    )
                })}
            </div>
            
            <Search value={searchTerm} onChange={setSearchTerm}/>
            <div className={styles.machines}>
                <input type='checkbox'/>
                <div className={styles.machine_conatainer}>
                    <div className={styles.name}>
                        MACHINE NAME
                    </div>
                    <div className={styles.machine_address}>
                        ADDRESS
                    </div>
                </div>
            </div>
           {filteredData.map((machine)=>{
                return(
                    <div key={machine.machine_name} className={styles.machines}>
                    <input onChange={()=>handleCheckboxSelect(machine)} type='checkbox'/>
                    <div className={styles.machine_conatainer}>
                        <div className={styles.logo}>
                            <Image src='/aahaar.svg' height={36} width={36} alt='aahar'/>
                            <div className={styles.stall_name}>
                                 {machine.machine_name} ({machine.id})
                            </div>
                           
                        </div>
                        <div className={styles.address}>
                        {machine.address}
                        </div>
                    </div>
                </div>
                )
           })}
        </div>
        <div className={styles.status_container}>
            {status.map((item)=>{
                return(
                    <div key={item.name} className={styles.statuses}>
                <Image src={item.src} alt={item.alt} height={28} width={28}/>
                <div>
                {item.name}
                </div>
            </div>
                )
            })}
        </div>
        <div className={styles.footer}>
            <div className={styles.clearall_footer}>
                Clear All
            </div>
            <div className={styles.apply}>
                Apply
            </div>

        </div>
    </div>
  )
}
