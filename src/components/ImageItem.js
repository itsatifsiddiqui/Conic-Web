import { CircularProgress, Grid, Container } from '@mui/material';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

function SimpleDialog(props, account) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedValue.name} Account</DialogTitle>
      <DialogTitle>{selectedValue.fullLink}</DialogTitle>
      <Container sx={{ minHeight: 12 }} />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};

function ImageItem({ account, width }) {

  const [isImageLoading, setIsImageLoading] = useState(true);

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(account);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };


  return (
    <Grid key='url' item xs={3} style={{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }} >


      {isImageLoading && <CircularProgress color="success" style={{ marginTop: 16 }} />}
      <>
        <img
          src={account.image}
          alt='account images'
          width={width}
          onClick={() => {
            if (isValidHttpUrl(account.fullLink)) {
              window.open(account.fullLink);
            }
            handleClickOpen();
          }}
          onLoad={() => {
            setIsImageLoading(false);
          }}
        />
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          account={account}
        />
      </>

    </Grid>
  )
}

export default ImageItem
