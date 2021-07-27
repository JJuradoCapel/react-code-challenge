import React from 'react';
import './ProductModal.styles.css';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { PhoneInfo } from '../../adapters';
import { backendURL } from '../../config';

interface ProductModalProps {
  data: PhoneInfo;
  open: boolean
  handleClose: () => void;
}
const ProductModal: React.FC<ProductModalProps> = ({ data, open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
  >
    <DialogTitle>{data.name}</DialogTitle>
    <DialogContent className={fullScreen ? 'modal-container full-screen' : 'modal-container'}>
      <div className="data-container">
        <h4>Manufacturer:</h4>
        {data.manufacturer}
        <h4>Processor:</h4>
        {data.processor}
        <h4>Screen:</h4>
        {data.screen}
        <h4>RAM:</h4>
        {data.ram}
        <h4>Color:</h4>
        {data.color}
        <h4>Price:</h4>
        {data.price}€
        <h4>Description:</h4>
        {data.description}
      </div>
      <img className="image" src={`${backendURL}/images/${data.imageFileName}`} />
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
};

export default ProductModal;