import React, {Fragment} from 'react';
import Header from "../../05/layout/Header";
import Navigation from "../../05/layout/Navigation";
import Footer from "../../05/layout/Footer";
import styles from '../assets/scss/component/About.scss';

export default function About() {
    return (
        <Fragment>
            <Header/>
            <div className={styles.About}>
                <h2>주이가 괴롭힙니다.</h2>
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}