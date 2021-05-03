import React from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {useState} from "react"
import { makeStyles } from "@material-ui/core/styles";
import {MainSliderImages} from "./MainSliderImages"

function iconStyles() {
    return {
      arrow: {
        width: "40px",
        height: "40px",
        color: '#36ab35'
      }
    }
  }


function ImageSlider() {
    const [index, setIndex] = useState(0);
    const classes = makeStyles(iconStyles);

    return (
        <div className="image-slider">
            <a href="#" className="image-slider__arrow-left" onClick={(event) => {
                event.preventDefault();
                index === 0 ? setIndex(MainSliderImages.length - 1) : setIndex(index - 1);
            }}><ArrowLeftIcon className={classes.arrow} fontSize="large" color="action" style={{fontSize: 70}}/></a>
            
            
                <div className="slide">
                    <img src={MainSliderImages[index].photo} alt="dental" className="slide__dental-img"/>
                </div>
            
            <a href="#" className="image-slider__arrow-right" onClick={(event) => {
                event.preventDefault();
                index === MainSliderImages.length - 1 ? setIndex(0) : setIndex(index + 1);
            }}><ArrowRightIcon fontSize="large" color="action" style={{fontSize: 70}}/></a>
        </div>
    )
}

export default ImageSlider