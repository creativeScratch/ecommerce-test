import classes from "./HighlightProducts.module.css";

const HighlightProducts = (props) => {
  return (
    <div>
      <h2 className={classes.h1}>PRODUCTS</h2>
      <div className={classes.main}>
        <div className={classes.image}>
          <img src={props.imageUrl} alt=""></img>
        </div>
        <div className={classes.secmain}>
          <div>
            <span className={classes.title}>{props.title}</span>
          </div>
        </div>
        <div>
          <h4 className={classes.h5}>Reviews</h4>
          <span className={classes.p}>{props.reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default HighlightProducts;
