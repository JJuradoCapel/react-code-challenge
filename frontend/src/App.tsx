import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/App.css';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import ProductCard from './components/ProductCard';
import {useEffect, useState} from 'react';
import {getPhones, PhoneInfo} from './adapters';

function App() {
  const [phones, setPhones] = useState<PhoneInfo[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPhones((res) => {
      const { data } = res;
      setPhones(data)
    })
  },[]);

  return (
    <>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton>
            </IconButton>
            <h2>
              Phone Catalog
            </h2>
          </Toolbar>
        </AppBar>
        <div className="product-grid">
          {phones.map((item) => <ProductCard data={item} />)}
        </div>
      </div>
    </>
  );
}

export default App;
