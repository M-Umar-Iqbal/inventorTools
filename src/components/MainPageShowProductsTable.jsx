import React, { useState } from "react";
import { useEffect } from "react";
import AddProduct from "./MainPageAddProduct";
import Header from "./Header";
import Indicator from "./Indicator";
import ProductDetail from "./Product";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Chip, FormControlLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/AddBox";
import { Container } from "@mui/system";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
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
} from "@mui/material";

function MainPageShowProducts(props) {
    useEffect(() => {
        document.title = "Inventory | Products";
    });

    const location = useLocation();
    const id = location.state;
    const [searchTerm, setSearchTerm] = useState("");
    const productdata = useSelector((state) => {
        return state.Add_product.shopData.filter((el) => el.productShopid === id);
    });

    const data = useSelector((state) => {
        return state.Add_Shop.storeData;
    });
    const m = data.find((el) => el.id === id);

    return (
        <div>
            <Header />

            <Indicator indicator="PRODUCTS" shopName={m.shop_name} />

            <Routes>
                <Route path="/Addproduct" element={<AddProduct />} />
                <Route path="//ProductDetail" element={<ProductDetail />} />
            </Routes>

            <Container
                fixed
                maxWidth="lg"
                style={{ marginTop: "50px", marginBottom: "50px" }}
            >
                <input
                    style={{
                        width: "200px",
                        padding: "10px",
                        borderRadius: "15px",
                        border: "3px solid #484A4E",
                        backgroundColor: "#484A4E",
                        color: "#7D9D9C",
                        fontWeight: "bold",
                        marginBottom: "20px",
                    }}
                    placeholder="Search . . . "
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#484A4E" }}>
                                <TableCell colSpan={3}>
                                    <p
                                        style={{
                                            fontSize: "20px",
                                            color: "#E4DCCF",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Available Products
                                    </p>
                                </TableCell>
                                <TableCell colSpan={2} style={{ textAlign: "right", }}>
                                    <Link
                                        to="/Addproduct"
                                        state={id}
                                        style={{
                                            textDecoration: "none",
                                            color: "#E4DCCF",

                                        }}
                                    >
                                        <FormControlLabel label="ADD NEW PRODUCT"
                                            control={<AddIcon
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
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {productdata.length === 0 ? <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <h3>No Product's to Display</h3>

                                </TableCell>

                            </TableRow> :

                                <TableRow>
                                    <TableCell>
                                        <b>Name</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Catergory</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Price</b>
                                    </TableCell>
                                    <TableCell align="center">
                                        <b>Quantity</b>
                                    </TableCell>
                                    <TableCell style={{ textAlign: "center" }}>
                                        <b>Visit Shop</b>
                                    </TableCell>
                                </TableRow>
                            }
                            {productdata
                                .filter((val) => {
                                    if (!searchTerm.trim()) {
                                        return val;
                                    } else if (
                                        val.pname.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return val;
                                    } else {
                                        return "";
                                    }
                                }).reverse()
                                .map((e, index) => (
                                    <TableRow key={index}>
                                        <TableCell
                                            style={{ textTransform: "capitalize", fontSize: "15px" }}
                                        >
                                            {e.pname}
                                        </TableCell>
                                        <TableCell>
                                            <Chip label={e.pcategroy} />
                                        </TableCell>
                                        <TableCell>{e.pprice}</TableCell>
                                        <TableCell align="center">{e.pquantity}</TableCell>

                                        <TableCell style={{ textAlign: "center" }}>
                                            <Link
                                                to="/ProductDetail"
                                                state={e.productid}
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <Button
                                                    style={{
                                                        backgroundColor: "#484A4E",
                                                        padding: "10px",
                                                    }}
                                                    variant="contained"
                                                >
                                                    See Product
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />
        </div>
    );
}

export default MainPageShowProducts;
