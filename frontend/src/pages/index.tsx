import { useEffect, useState } from 'react';
import { AppBar, IconButton, LinearProgress, Toolbar } from '@material-ui/core';

import '../styles/App.css';

import ProductCard from '../components/ProductCard';
import { getPhones, PhoneInfo } from '../adapters';

function PhonePage() {
  const [phones, setPhones] = useState<PhoneInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPhones((res) => {
      const { data } = res;
      setPhones(data);
      setLoading(false);
    })
  },[]);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton>
          </IconButton>
          <h2>
            Phone Catalog
          </h2>
        </Toolbar>
      </AppBar>
      {loading && <LinearProgress />}
      <div className="product-grid">
        {phones.map((item) => <ProductCard key={item._id} data={item} />)}
      </div>
    </>
  );
}

export default PhonePage;
