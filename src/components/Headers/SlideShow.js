/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';

// reactstrap components


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
      Container,
} from 'reactstrap';


const SlideShow = () => {

  const [items, setData] = useState([]);

 if( Object.keys(items).length <= 0){
   /* fetch('../data/slideindex.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(response){
       // console.log("response "+response)
        return response.json();
      })
      .then(function(myJson) {
        //console.log("myJson "+myJson);
         setData(myJson);
       }); */

     let myJson =[
	  {
	    "src": "images/slide1.webp",
	    "altText": "Assistance",
	    "caption": "Assistance"
	  },
	  {
	    "src": "images/slide2.webp",
	    "altText": "Performance",
	    "caption": "Performance"
	  },
	  {
	    "src": "images/slide3.webp",
	    "altText": "Succés",
	    "caption": "Succés"
	  }

	];
	      setData(myJson);
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    let srcImage = require("../../assets/img/"+item.src); //.default;

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={srcImage} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <>
      <div className="header pb-4 pt-8 pt-md-8">

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

      </div>
    </>
  );
};

export default SlideShow;
