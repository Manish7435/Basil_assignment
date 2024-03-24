import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

function Search({onChange, value}) {

  return (
    <div className={styles.container}>
      <Image src={'/search.svg'} alt='search' height={20} width={20} />
        <input
        type='text' 
        className={styles.search} 
        placeholder='Search'
        onChange={(e) => onChange(e.target.value)}
        value={value}
        />
     </div>
  )
}

export default Search