import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithDefault = (props) => {
  const {src, defaultSrc, contact, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src)

  const insertDefault = () => {
    setImgSrc(defaultSrc)
    alert(`${src} for contact ${contact} did not return an image, setting profile pic as default`)
  }
  return (
    <Image 
      {...rest}
      src={imgSrc}
      onError={() => {
        insertDefault()
        }
      }
    />
  )
}

export default ImageWithDefault;