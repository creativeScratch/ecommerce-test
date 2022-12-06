import classes from "./Home.module.css";
import Homeheader from "../components/layout/Homeheader";
import Homefooter from "../components/layout/Homefooter";

const Home = () => {
  return (
    <div>
      <Homeheader></Homeheader>
      <div className={classes.home}>
        <h1 className={classes.heading}>TOURS</h1>
        <div className={classes.lists}>
          <div className={classes.particular}>
            <span>JUL 16</span>
            <span className={classes.sec}>DETROIT, MI</span>
            <span className={classes.third}>DTE ENERGY MUSIC THEATRE</span>
            <button className={classes.button}>BUY TICKETS</button>
          </div>
          <div className={classes.particular}>
            <span>JUL 19</span>
            <span className={classes.sec}>TORONTO,ON</span>
            <span className={classes.third}>BUDWEISER STAGE</span>
            <button className={classes.button}>BUY TICKETS</button>
          </div>
          <div className={classes.particular}>
            <span>JUL 22</span>
            <span className={classes.sec}>BRISTOW, VA</span>
            <span className={classes.third}>JIGGY LUBE LIVE</span>
            <button className={classes.button}>BUY TICKETS</button>
          </div>
          <div className={classes.particular}>
            <span>JUL 29</span>
            <span className={classes.sec}>PHOENIX, AZ</span>
            <span className={classes.third}>AK-CHIN PAVILION</span>
            <button className={classes.button}>BUY TICKETS</button>
          </div>
          <div className={classes.particular}>
            <span>AUG 2</span>
            <span className={classes.sec}>LAS VEGAS, NV</span>
            <span className={classes.third}>T-MOBILE ARENA</span>
            <button className={classes.button}>BUY TICKETS</button>
          </div>
          <div className={classes.particular}>
            <span>AUG 7</span>
            <span className={classes.sec}>CONCORD, CA</span>
            <span className={classes.third}>CONCORD PAVILION</span>
            <button className={classes.button}>BUY TICKETS</button>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </div>
  );
};

export default Home;
