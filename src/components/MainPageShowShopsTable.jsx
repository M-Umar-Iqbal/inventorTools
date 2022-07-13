import AddBusinessIcon from "@mui/icons-material/AddBusiness";

import ArrowForwardIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AddShop from "./MainPageAddShop";
import Header from "./Header";
import Showproducts from "./MainPageShowProductsTable";
import { useSelector } from "react-redux";
import Footer from "./Footer";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  FormControlLabel,

} from "@mui/material";

import { Link, Routes, Route } from "react-router-dom";

import { Container } from "@mui/system";
import Indicator from "./Indicator";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";


function ShopAddToHome(props) {

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    document.title = "Inventory | Shops";
  });
  const data = useSelector((state) => {
    return state.Add_Shop.storeData;
  });

  const productdata = useSelector((state) => {
    return state.Add_product.shopData;
  });

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },

  }));

  return (
    <div >
      <Header />
      <Indicator indicator="SHOPS" />

      <Routes>
        <Route path="/AddShop" element={<AddShop />} />
        <Route path="/showproducts" element={<Showproducts />} />
      </Routes>

      <Container
        fixed
        maxWidth="lg"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <TableContainer component={Paper} style={{ maxHeight: "570px", overflowY: "auto", }}>
          <Table aria-label="simple table" >
            <TableHead style={{ position: "sticky", top: "0", zIndex: "1" }}>
              <TableRow style={{ backgroundColor: "#252628" }}>

                <TableCell colSpan={3} style={{ paddingLeft: "40px" }}>

                  <Link
                    to="/AddShop"
                    style={{
                      textDecoration: "none",
                      color: "#E4DCCF",
                    }}
                  >
                    <FormControlLabel label="ADD NEW SHOP"
                      control={<AddBusinessIcon
                        titleAccess="Click To Add New Shop"
                        fontSize="large"
                        style={{

                          fontSize: "40px",
                          color: "#E4DCCF",
                          marginRight: "10px"
                        }}
                      />} />

                  </Link>
                </TableCell>
                <TableCell colSpan={2} style={{ textAlign: "right" }}>
                  <input
                    style={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "15px",
                      border: "3px solid #E4DCCF",
                      backgroundColor: "#252628",
                      color: "#7D9D9C",
                      fontWeight: "bold"
                    }}
                    placeholder="Search . . . "
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}

                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length === 0 ? <TableRow><TableCell colSpan={5} align="center"><h3>No Shop to Display</h3></TableCell></TableRow> :
                <TableRow style={{ position: "sticky", top: "71px", zIndex: "1", backgroundColor: "white" }}>
                  {/* <TableCell colSpan={3} style={{backgroundColor:'red'}}> No Shops To Display</TableCell> */}
                  <TableCell>
                    <b>ID</b>
                  </TableCell>
                  <TableCell>
                    <b>Name</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Total Catergories</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Total Products</b>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <b>Visit Shop</b>
                  </TableCell>
                </TableRow>
              }
              {data
                .filter((val) => {
                  if (!searchTerm.trim()) {
                    return val;
                  } else if (
                    val.shop_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else {
                    return "";
                  }
                }).reverse()
                .map((e, index) => (
                  <StyledTableRow key={index}>
                    <TableCell>{index}</TableCell>
                    <TableCell
                      style={{ textTransform: "capitalize", fontSize: "15px" }}
                    >
                      <b>{e.shop_name}</b>
                    </TableCell>
                    <TableCell align="center">{e.tagss.length}</TableCell>
                    {/* <TableCell align="center">{e.id}</TableCell> */}
                    <TableCell align="center">
                      {
                        productdata.filter((el) => el.productShopid === e.id)
                          .length
                      }
                    </TableCell>

                    <TableCell style={{ textAlign: "center" }}>
                      <Link
                        to="/showproducts"
                        state={e.id}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "#252628",
                            padding: "10px",
                            borderRadius: "15px",


                          }}

                          variant="contained"
                          size="small"

                        >
                          Explore
                          <ArrowForwardIcon style={{ marginLeft: "5px" }} />

                        </Button>
                      </Link>
                    </TableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Footer />
    </div>
  );
}

export default ShopAddToHome;
