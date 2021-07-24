import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/App.css';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import ProductCard from './components/ProductCard';
import {useEffect, useState} from 'react';
import {getPhones} from './adapters';

function App() {
  const [phones, setPhones] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPhones((res) => {
      const { data } = res;
      console.log(data)
      setPhones(Array(50).fill(data[0]))
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
