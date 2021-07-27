import React, {useState} from 'react';
import './ProductCard.styles.css';

import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import { PhoneInfo } from '../../adapters';
import { backendURL } from '../../config';
import ProductModal from '../ProductModal';

interface ProductCardProps {
  data: PhoneInfo;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <>
    <Card className="product-card">
      <CardActionArea onClick={handleOpen}>
        <CardMedia className="media" component="img" image={`${backendURL}/images/${data.imageFileName}`} />
        <CardContent>
          <h2>{data.price}€</h2>
          <h3>{data.name}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
    <ProductModal data={data} open={open} handleClose={handleClose} />
  </>
};

export default ProductCard;