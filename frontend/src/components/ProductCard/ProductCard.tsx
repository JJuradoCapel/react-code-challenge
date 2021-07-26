import React from 'react';
import './ProductCard.styles.css';

import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import { PhoneInfo } from '../../adapters';
import { backendURL } from '../../config';

interface ProductCardProps {
  data: PhoneInfo;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return <Card className="product-card">
    <CardActionArea>
      <CardMedia className="media" component="img" image={`${backendURL}/images/${data.imageFileName}`} />
      <CardContent>
        <h2>{data.price}€</h2>
        <h3>{data.name}</h3>
      </CardContent>
    </CardActionArea>
  </Card>
};

export default ProductCard;