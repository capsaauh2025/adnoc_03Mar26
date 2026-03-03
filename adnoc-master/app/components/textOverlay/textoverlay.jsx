import React from "react";
import banner from "@/public/images/bannerimage.jpg";
import ImageWithTextOverlay from "../ImageOverlayContainer/ImageOverlayContainer";
const TextOverlay = ({lang}) => {
  return (
    <div className=" ">
      <ImageWithTextOverlay
        imageUrl="public/images/bannerimage.jpg"
        text="Voices Matter"
        lang={lang}
      />
    </div>
  );
};

export default TextOverlay;
