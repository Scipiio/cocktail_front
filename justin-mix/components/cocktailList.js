
import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import CocktailCard from './cocktailCard';
import styles from './cocktailcard.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function CocktailList() {
    //Handle Search
    const [searchInput, setSearchInput] = useState("");

    const { data, error, isLoading } = useSWR('/api/staticdata', fetcher);
    
    //Handle the error state
    if (error) return <div>Failed to load</div>;

    //Handle the loading state
    if (isLoading) return <div>Loading...</div>;

    let filteredCocktails = data.records.filter(record => record.name.toLowerCase().includes(searchInput));

    const handleChange = (e) => {
        setSearchInput(e.target.value.toLowerCase())
    }

  return (
    <>
        <div className={styles.menuBody}>
            <div className="d-flex justify-content-center"><strong>CALICOMP 3.1</strong></div>
            <input 
                className="m-2"
                type="text"
                placeholder='Recherche'
                onChange={handleChange}
                value={searchInput} />
            {filteredCocktails.map((record) => 
                <CocktailCard key={record.id} value={record}></CocktailCard>
            )}
        </div>
    </>
  );

}