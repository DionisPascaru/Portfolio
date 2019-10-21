import './Travel.scss';
import React from "react";
import Gallery from 'react-photo-gallery';
import gallery from '../gallery/gallery';

const PHOTO_SET = [
  {
    src: gallery.gallery_img1,
    width: 3,
    height: 4
  },
  {
    src: gallery.gallery_img2,
    width: 3,
    height: 4
  },
  {
    src: gallery.gallery_img3,
    width: 3,
    height: 4
  },
  {
    src: gallery.gallery_img4,
    width: 4,
    height: 3
  },
  {
    src: gallery.gallery_img5,
    width: 4,
    height: 3
  },
  {
    src: gallery.gallery_img6,
    width: 3,
    height: 4
  },
  {
    src: gallery.gallery_img7,
    width: 2,
    height: 4
  },
  {
    src: gallery.gallery_img8,
    width: 2,
    height: 4
  },
  {
    src: gallery.gallery_img9,
    width: 4,
    height: 3
  },
  {
    src: gallery.gallery_img10,
    width: 3,
    height: 4
  },
  {
    src: gallery.gallery_img11,
    width: 2,
    height: 4
  },
  {
    src: gallery.gallery_img12,
    width: 4,
    height: 3
  },
  {
    src: gallery.gallery_img13,
    width: 2,
    height: 4
  },
  {
    src: gallery.gallery_img14,
    width: 2,
    height: 4
  }
];

function TravelContent(){
    return (
        <div className="content-expanted">
            <Gallery photos={PHOTO_SET} />
        </div>
    )    
}

export default TravelContent;