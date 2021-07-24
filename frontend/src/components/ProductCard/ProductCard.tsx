import React from 'react';
import './ProductCard.styles.css';

import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';

const ProductCard = ({ data }: Record<string, any>) => {
  return <Card className="product-card">
    <CardActionArea>
      <CardMedia className="media" image="/logo512.png" />
      <CardContent>
        <h2>{data.price}€</h2>
        <h3>{data.name}</h3>
      </CardContent>
    </CardActionArea>
  </Card>
};

export default ProductCard;