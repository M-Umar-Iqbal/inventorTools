import React from "react";
import Header from "./Header";

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
function Product(props) {
    const location = useLocation();
    const Pid = location.state;

    const productdata = useSelector((state) => {
        return state.Add_product.shopData.filter((el) => el.productid === Pid);
    });



    return (
        <div>
            <Header />
            <Container fixed maxWidth="md" style={{ marginTop: "50px" }}>
                <TableContainer component={Paper}>
                    <Table>

                        <TableHead >
                            <TableRow style={{ backgroundColor: "#252628", }}>
                                <TableCell style={{ color: "#E4DCCF", }}>
                                    <b>Name</b>
                                </TableCell >
                                <TableCell style={{ color: "#E4DCCF", }}>
                                    <b>Price</b>
                                </TableCell>
                                <TableCell style={{ color: "#E4DCCF", }}>
                                    <b>Quantity</b>
                                </TableCell>
                                <TableCell style={{ color: "#E4DCCF", }}>
                                    <b>Category</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productdata.map((e, index) => (
                                <TableRow key={index}>
                                    <TableCell>{e.pname}</TableCell>
                                    <TableCell>{e.pprice}</TableCell>
                                    <TableCell>{e.pquantity}</TableCell>
                                    <TableCell>
                                        <Chip label={e.pcategroy} />
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell colSpan={4}>
                                    <b>Description</b>
                                </TableCell>
                            </TableRow>

                            {productdata.map((e, index) =>
                                e.pdescription === null ? (
                                    <TableRow key={index}>
                                        <TableCell colSpan={4}>
                                            <p>Product Description Not Available</p>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    <TableRow key={index}>
                                        <TableCell colSpan={4}>{e.pdescription}</TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default Product;
