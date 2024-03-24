import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

function Download({tableData}) {

  const handleExportClick = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + tableData.map(row => Object.values(row).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table_data.csv");
    document.body.appendChild(link);

    link.click();
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();

    const columns = Object.keys(tableData[0]);

    const rows = tableData.map(item => Object.values(item));

    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save('tableData.pdf');
  };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            {/* <Search onChange={onChange} value={value}/> */}
        </div>
        <div className={styles.right}>
            <div className={styles.bell} onClick={handleExportClick}> <Image src={'/Export.svg'} height={30} width={30} alt='export'/></div>
            <div className={styles.avatar} onClick={handleExportPDF}> <Image src={'/Docs.svg'} height={24} width={24} alt='docs'/></div>
        </div>
    </div>
  )
}

export default Download 