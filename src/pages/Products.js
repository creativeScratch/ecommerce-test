import { useParams } from "react-router-dom";

import HighlightProducts from "./HighlightProducts";
import Aboutheader from "../components/layout/Aboutheader";
import Homefooter from "../components/layout/Homefooter";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    reviews: "Product quality is good",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    reviews: "Product quality is good",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    reviews: "Product quality is good",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    reviews: "Product quality is good",
  },
];

const Products = () => {
  const params = useParams();

  const product = DUMMY_DATA.find((product) => product.id === params.productId);

  console.log(params.productId);

  return (
    <div>
      <Aboutheader></Aboutheader>
      <HighlightProducts
        imageUrl={product.imageUrl}
        reviews={product.reviews}
        title={product.title}
      ></HighlightProducts>
      <Homefooter></Homefooter>
    </div>
  );
};

export default Products;
