import React, {Fragment} from 'react';
import styles from '../assets/scss/component/Main.scss';
import SiteLayout from '../layout/SiteLayout';

export default function Main() {
    return (
        //children 선언 안해줘도 자동으로 children으로 값이 들어감 (SiteLayout 안에 값이)
        <SiteLayout>
            <div className={styles.Main}>
                <h2>Main</h2>
            </div>
        </SiteLayout>
    );
}