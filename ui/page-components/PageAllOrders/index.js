import DownloadSection from "@/ui/components/DownloadSection"
import Topbar from "@/ui/components/TopBar"
import styles from './styles.module.css'
import Details from "@/ui/components/Details"
import Table from "@/ui/components/Table"
import Filter from "@/ui/components/Filter"
import GlobalFilter from "@/ui/components/GlobalFilter"
import data from '../../../data.json'
import { useEffect, useState } from "react"

export default function PageAllOrders(){
    const [showGlobalFilter, setShowGlobalFilter] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedMachines, setSelectedMachines]= useState([])
    const [filteredData, setFilteredData] = useState(data)

    const handleOnClick = ()=>{
        setShowGlobalFilter(!showGlobalFilter)
    }
    const handleClearAll = ()=>{
        setFilteredData(data)
    }

    useEffect(() => {
        if (selectedMachines.length !== 0 || searchTerm) {
            let filteredData = data || [];
    
            if (selectedMachines.length !== 0) {
                filteredData = filteredData.filter(item => selectedMachines.includes(item?.machine_id));
            }
    
            if (searchTerm) {
                filteredData = filteredData.filter(item => item?.order_id.toLowerCase().includes(searchTerm.toLowerCase()));
            }
    
            setFilteredData(filteredData);
        } else {
            setFilteredData(data || []);
        }
    }, [selectedMachines, searchTerm]);

    return(
        <div className={styles.container}>
            <div className={styles.bar_container}>
                <Topbar onChange={setSearchTerm} value={searchTerm}/>
                <DownloadSection onChange={setSearchTerm} value={searchTerm} tableData={filteredData}/>
            </div>
            <div className={styles.content}>
                <div className={styles.table_content}>
                    <Details/>
                    <Table data={filteredData}/>
                </div>
                <Filter handleOnClick={handleOnClick} handleClearAll={handleClearAll}/>
            </div>
            {showGlobalFilter && (
        <div className={styles.backdrop}/>
      )}
            {showGlobalFilter&& 
                <GlobalFilter
                    setShowGlobalFilter={setShowGlobalFilter}
                    setSelectedMachines={setSelectedMachines} 
                    selectedMachines={selectedMachines} 
                />}
        </div>
    )
}