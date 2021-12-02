import React, {useState} from 'react';
import styles from './assets/scss/Searchbar.scss';
const Searchbar = ({callback}) => {

    //제어방식 (value, onchange())
    const [keyword,setKeyword] = useState('');
    
    const onInputChanged = (e) =>{
        setKeyword(e.target.value);
        //부모한테 값 전달 callback
        callback(e.target.value)
    };
    
    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' value={keyword} onChange={onInputChanged}/>
        </div>
    );
};

export default Searchbar;