import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ImageItem from './ImageItem';

// const accounts = [
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Fapple_music.png?alt=media&token=75b725f4-60d8-4a51-86e1-28b6cd4c9df2',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Fcall.png?alt=media&token=e6b4f832-eb12-4172-89b3-c89f79f25d72',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Fcash.png?alt=media&token=b670715a-6cf1-461b-9431-4b94b27f9936',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Fcontacts.png?alt=media&token=a331ac86-6402-49b2-85c8-9686c8f962a4',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Ffacebook.png?alt=media&token=3ce80c15-331a-42a1-927c-fe4d4b19c1bf',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Finstagram.png?alt=media&token=83895e5a-4444-4055-bffe-cead63af409c',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Flink.png?alt=media&token=1a3a8b98-9c7b-44b6-b336-3174162b5771',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Flinkedin.png?alt=media&token=cf62bd1c-c036-43a4-b928-15fc2c0ed2a7',
//   'https://firebasestorage.googleapis.com/v0/b/conic-688fe.appspot.com/o/accounts%2Fmail.png?alt=media&token=bc64ad46-97d2-413a-9ddf-1e670b6a44f0',
// ];

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function AccountsGrid({ userData }) {

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })


  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }


  })


  const width = dimensions.width < 650 ? dimensions.width * 0.18 : 100;


  return (
    <Grid container
      direction="row"
      spacing={1}
    >
      {
        userData.linkedAccounts.map((account) =>

          <ImageItem key={account.image} account={account} width={width} />

        )
      }
    </Grid>
  )
}

export default AccountsGrid

