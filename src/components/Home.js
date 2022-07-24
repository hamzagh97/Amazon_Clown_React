import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <img
          alt="slider_image"
          src="https://m.media-amazon.com/images/I/6183it9gm4L._SX3000_.jpg"
          className="slider"
        />
      </div>
      <div className="products">
        <Product
          title="Find your ideal TV"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
        <Product
          title="Click here to shop in English"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_ClicktoShop_EN_v3__1x._SY304_CB661258542_.jpg"
        />
        <Product
          title="gaming accessories"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
        />
        <Product
          title="Dresses"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
        />
        <Product
          title="Find your ideal TV"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        />
        <Product
          title="Click here to shop in English"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_ClicktoShop_EN_v3__1x._SY304_CB661258542_.jpg"
        />
        <Product
          title="gaming accessories"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
        />
        <Product
          title="Dresses"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
