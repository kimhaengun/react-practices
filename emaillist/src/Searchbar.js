import React, {useState} from 'react';
import styles from './assets/scss/Searchbar.scss';
const Searchbar = ({keyword, callback}) => {
    
    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' value={keyword} onChange={(e) => callback(e.target.value)}/>
        </div>
    );
};

export default Searchbar;