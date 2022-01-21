import React from 'react';
import bg1 from "../../images/bg1.png";
import classes from "./HomePage.module.css";
import Container from "../../common-components/Container/Container";
import Logo from "./components/Logo";
import Nav from "./components/Nav/Nav";
import Basket from "./components/Basket/Basket";
import Slogan from "./components/Slogan/Slogan";
import Search from "./components/Search/Search";
import WhyChosingUs from "./components/WhyChosingUs/WhyChosingUs";
import BestSellingProducts from "./components/BestSellingProducts/BestSellingProducts";
import Footer from "./components/Footer/Footer";

const bgStyle = {
  backgroundImage: `url(${bg1})`,
}

const HomePage = () => {
  return (
    <div>
      <div style={bgStyle} className={classes.bg}>
        <header>
          <Container className={classes.container}>
            <Logo/>
            <Nav/>
            <Basket/>
          </Container>
        </header>
        <Slogan/>
        <Search/>
      </div>
      <WhyChosingUs/>
      <BestSellingProducts/>
      <Footer />
    </div>
  );
};

export default HomePage;
