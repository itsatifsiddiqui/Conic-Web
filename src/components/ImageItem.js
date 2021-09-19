import { CircularProgress, Grid } from '@mui/material';
import React, { useState } from 'react'

function ImageItem({ account, width }) {

  const [isImageLoading, setIsImageLoading] = useState(true);



  return (
    <Grid key='url' item xs={3} style={{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }} >


      {isImageLoading && <CircularProgress color="success" style={{ marginTop: 16 }} />}

      <img
        src={account.image}
        alt='account images'
        width={width}
        onClick={() => {
          window.open(account.fullLink);
        }}
        onLoad={() => {
          setIsImageLoading(false);
        }}
      />
    </Grid>
  )
}

export default ImageItem
