import React from "react";


import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className="m-3"><Card /></div>
      <div><Footer /></div>
    </div>
  );
}
