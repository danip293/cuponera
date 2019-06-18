import React from 'react'
import Dropzone from 'react-dropzone'

export const ImageComponent = (props) = {
  console.log(props);
  const onDrop = (files) => { console.log(files) }
  return(
        <Dropzone accept = "image/jpeg, image/pnj" onDrop = { onDrop } />
  )
}