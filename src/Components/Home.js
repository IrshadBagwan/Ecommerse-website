import React from "react";
import classes from '../Components/Home.module.css';

const Home = () =>{

    return(
        <>
        <section style={{textAlign:'center',backgroundColor:'gray'}}>
    <h1 style={{padding:'40px',fontSize:'70px',color:'white'}}>The Generics</h1>
    <button className={classes.latestalbum}>Get our Latest Album</button>
    <button className={classes.playbtn}>►</button>
    </section>
    <section id="tours" className={classes.container}>
        <h2 className={classes.h2}>TOURS</h2>
        <div className={classes.box}>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL16</span>
                <span className={classes.tourPlace}>DETROIT, MI</span>
                <span className={classes.tourspecplace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL16</span>
                <span className={classes.tourPlace}>DETROIT, MI</span>
                <span className={classes.tourspecplace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL16</span>
                <span className={classes.tourPlace}>DETROIT, MI</span>
                <span className={classes.tourspecplace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL16</span>
                <span className={classes.tourPlace}>DETROIT, MI</span>
                <span className={classes.tourspecplace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            </div>
           
           
    </section>
    <footer className={classes.footer}>
        <div className={classes.footertitle}>
            The Generics
        </div>
   
    </footer>
     </>

    );
}

export default Home;