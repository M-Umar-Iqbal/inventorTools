import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Add_Product } from '../redux/actions/Action';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  Collapse,
  Alert,
  Autocomplete,
  Switch,
  FormControlLabel,
} from '@mui/material';

import { Container, TextField, Button } from '@mui/material';

export default function Products() {
  const [label, setlabel] = useState(false);
  const [productname, setproductname] = useState(''); //Use State For product name
  const [productprice, setproductprice] = useState(0); //Use State For product price
  const [productquantity, setproductquantity] = useState(0); //
  const [productdescription, setproductdescription] = useState(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [categoryValue, setCategoryValue] = useState('');

  const location = useLocation();
  const Id = location.state;

  const data = useSelector((state) => {
    return state.Add_Shop.storeData;
  });

  const filterdata = data.find((val, i) => val.id === Id);

  const Tags = filterdata.tagss;

  const handleChange = (event) => {
    setlabel(event.target.checked);
  };

  function AddProduct() {
    const Name = document.getElementById('name').value;
    setproductname(Name);
    const Price = document.getElementById('price').value;
    setproductprice(Price);
    const Quantity = document.getElementById('quantity').value;
    setproductquantity(Quantity);

    const newproduct = {
      productShopid: Id,
      productid: uuidv4(),
      pname: productname,
      pprice: productprice,
      pquantity: productquantity,
      pdescription: productdescription,
      pcategroy: categoryValue,
    };

    setproductname('');
    document.getElementById('name').value = '';
    setproductprice('');
    document.getElementById('price').value = '';
    setproductquantity('');
    document.getElementById('quantity').value = '';

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setOpen(true);

    setTimeout(function () {
      navigate('/showproducts', { state: Id });
    }, 1000);

    dispatch(Add_Product(newproduct));
  }

  function validPriceCheck(e) {
    setproductprice(e);
    const value = document.getElementById('price').value;
    if (value <= 0) {
      document.getElementById('priceWarn').innerHTML =
        '* Price must be Greater Than 0';
    } else {
      document.getElementById('priceWarn').innerHTML = '';
    }
  }
  function validQuantityCheck(e) {
    setproductquantity(e);
    const value = document.getElementById('quantity').value;
    if (value <= 0) {
      document.getElementById('quantityWarn').innerHTML =
        '* Quantity must me greater than 0';
    } else {
      document.getElementById('quantityWarn').innerHTML = '';
    }
  }

  return (
    <div>
      <Header />
      <Collapse in={open}>
        <div style={{ padding: '20px' }}>
          <Alert severity="success">Product Added Successfully! </Alert>
        </div>
      </Collapse>
      <Container
        fixed
        maxWidth="md"
        style={{
          marginTop: '50px',
          marginBottom: '40px',
          paddingTop: '10px',
          boxShadow: '10px 10px 30px 5px rgb(0,0,0,0.2)',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            fontFamily: 'calbari',
            marginBottom: '30px',
            marginLeft: '10px',
            paddingTop: '30px',
          }}
        >
          <h1 style={{ color: '#252628', display: 'inline' }}>
            Add your Product
          </h1>
        </div>

        <div style={{ margin: '10px', padding: '10px' }}>
          <TextField
            type="text"
            variant="outlined"
            autoComplete="off"
            label="Product Name"
            onChange={(e) => setproductname(e.target.value)}
            fullWidth
            id="name"
          />
        </div>
        <div style={{ margin: '10px', padding: '10px' }}>
          <TextField
            autoComplete="off"
            type="number"
            label="Price"
            InputProps={{
              inputProps: {
                min: 0,
              },
            }}
            onChange={(e) => validPriceCheck(e.target.value)}
            fullWidth
            id="price"
          />
          <div
            style={{
              color: 'red',
              fontWeight: 'bold',
              marginTop: '10px',
              fontSize: '10px',
            }}
            id="priceWarn"
          ></div>
        </div>
        <div style={{ margin: '10px', padding: '10px' }}>
          <TextField
            type="number"
            InputProps={{
              inputProps: {
                max: 1000,
                min: 0,
              },
            }}
            autoComplete="off"
            variant="outlined"
            label="Quantity"
            onChange={(e) => validQuantityCheck(e.target.value)}
            fullWidth
            id="quantity"
          />
          <div
            style={{
              color: 'red',
              fontWeight: 'bold',
              marginTop: '10px',
              fontSize: '10px',
            }}
            id="quantityWarn"
          ></div>
        </div>
        <div style={{ marginLeft: '15px', padding: '10px' }}>
          <FormControlLabel
            label="Want to Add Description?"
            control={
              <Switch
                checked={label}
                onChange={handleChange}
                defaultChecked
                size="small"
                name="checked"
              />
            }
          />
        </div>
        <div
          style={{
            margin: '10px',
            padding: '10px',
            maxHeight: '200px',
            overflowY: 'auto',
          }}
        >
          <TextField
            rows={5}
            multiline
            type="number"
            autoComplete="off"
            variant="outlined"
            placeholder="Product Description . . ."
            onChange={(e) => setproductdescription(e.target.value)}
            fullWidth
            id="quantity"
            disabled={!label}
          />
        </div>

        <div style={{ margin: '10px', padding: '10px' }}>
          <Autocomplete
            fullWidth
            onChange={(event, newValue) => {
              setCategoryValue(newValue);
            }}
            value={categoryValue}
            id="combo-box-demo"
            options={Tags}
            renderInput={(params) => (
              <TextField {...params} label="Categories" />
            )}
          />
        </div>

        <div
          style={{
            margin: '10px',
            padding: '20px',
          }}
        >
          <Button
            style={{
              padding: '15px',
              fontWeight: 'bold',
              fontSize: '15px',
              backgroundColor: '#484A4E',
            }}
            variant="contained"
            fullWidth
            onClick={AddProduct}
            disabled={
              !productname ||
              (!productname &&
                !categoryValue &&
                !productprice &&
                !productquantity) ||
              !categoryValue ||
              !productprice ||
              !productquantity ||
              productprice <= 0 ||
              productquantity <= 0
            }
          >
            Add Product
          </Button>
        </div>
      </Container>
    </div>
  );
}
