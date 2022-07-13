import React, { useState } from "react";
import { AddShop } from "../redux/actions/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "../App.css";
import Header from "./Header";
import { Alert, Collapse } from "@mui/material";
import { Grid, TextField, Button, Chip } from "@mui/material";
import { Container } from "@mui/system";
export default function Addshop() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [shopname, setshopname] = useState(""); //Use State For shop name
  const [tags, settags] = useState([]); //Use State for Main Page
  const dispatch = useDispatch();

  const newShop = {
    id: uuidv4(),
    shop_name: shopname,
    tagss: tags,
  };

  // ----------- Function to Create a New Shop ----------

  function SetShopName(e) {
    const ShopName = document.getElementById("text2").value;
    setshopname(ShopName);


    settags([]);
    // document.getElementById("killme").innerHTML = null; //Use this to remove tags div
    document.getElementById("txt").value = "";
    document.getElementById("text2").value = "";

    setOpen(true);
    setTimeout(function () {
      navigate("/");
    }, 1000);

    dispatch(AddShop(newShop));
  }

  // ------ Function to Handle the Tags by using Enter Key --------

  function HandleKeyDown(e) {
    if (e.key !== "Enter") return;

    const value = e.target.value;
    if (tags.includes(value))
      return (document.getElementById("dup").innerHTML =
        "Duplicate values not allowed");

    if (!value.trim()) return;
    document.getElementById("dup").innerHTML = "";
    settags([...tags, value]);
    document.getElementById("txt").value = "";
  }

  // ----------- Function to Handle the Tags by using Button ----------

  function HandleKeyDown2() {
    const text = document.getElementById("txt").value;
    if (!text.trim()) return;
    if (tags.includes(text))
      return (document.getElementById("dup").innerHTML =
        "Duplicate values not allowed");
    document.getElementById("dup").innerHTML = "";
    settags([...tags, text]);
    document.getElementById("txt").value = "";
  }

  // -----------To Delete a Chip----------
  function delelte(e) {

    settags(tags.filter((el, i) => i !== e));
  }
  // --------------------------------------

  return (
    <div>
      {/* Component to Show Header */}
      <Header />

      <Collapse in={open}>
        <div style={{ padding: "20px" }}>
          <Alert severity="success">Shop Created Successfull! </Alert>
        </div>
      </Collapse>

      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        <div
          style={{
            boxShadow: "5px 4px 5px 5px rgba(0,0,0,0.2)",
            borderRadius: "19px",
            padding: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "calbari",
              marginBottom: "30px",
              marginLeft: "10px",
              paddingTop: "15px",
            }}
          >
            <h1 style={{ color: "#252628", display: "inline" }}>
              Create your
              <p style={{ color: "#A0D2EB", display: "inline", WebkitTextStroke: "2px #252628" }}> Store</p>
            </h1>
          </div>

          <div style={{ margin: "10px" }}>
            {/* To disable the button if the name of shop is not given */}
            <TextField
              autoComplete="off"
              onChange={(e) => setshopname(e.target.value)}
              id="text2"
              label="Shop Name"
              fullWidth
            ></TextField>
          </div>

          <div id="main-div">
            <Grid container columns={12} style={{ marginTop: "30px" }}>
              <Grid item lg={6} xl={6} sm={12} xs={12}>
                {/* For Catgories Text Box */}
                <div style={{ margin: "10px" }}>
                  <TextField
                    autoComplete="off"
                    onKeyDown={HandleKeyDown}
                    onChange={() => (e) => tags(e.target.value)}
                    id="txt"
                    label="Categories"
                    variant="outlined"
                    fullWidth
                  />

                  {/* To Show Duplicate Massege */}
                  <div
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                    id="dup"
                  ></div>
                </div>
              </Grid>

              <Grid
                style={{ marginBottom: "10px" }}
                item
                lg={6}
                xl={6}
                sm={12}
                xs={12}
              >
                {/* Button to Add Category*/}
                <div style={{ height: "100%" }}>
                  <Button
                    style={{ margin: "15px", backgroundColor: "#252628" }}
                    variant="contained"
                    color="success"
                    size="large"
                    id="btn_category"
                    onClick={HandleKeyDown2}
                  >
                    Add Catgories
                  </Button>
                </div>
              </Grid>
            </Grid>

            {/* To Display the Tags Protion */}

            <Container maxwidth="xs">
              <div className="tags-portion" id="killme">
                {tags.map((tag, index) => (
                  <span key={index} className="my-margin">
                    <Chip
                      style={{ backgroundColor: "#607990" }}
                      label={tag}
                      color="success"
                      onDelete={() => delelte(index)}
                    />
                  </span>
                ))}
              </div>
            </Container>

            {/* ------------------------ */}
          </div>

          {/* For Create Store Button */}
          <div
            style={{
              //    For Button "Create Store"
              margin: "10px",
              padding: "20px",
            }}
          >
            <Button
              style={{
                padding: "15px",
                fontWeight: "bold",
                fontSize: "15px",
                backgroundColor: "#252628",
              }}
              variant="contained"
              onClick={SetShopName}
              disabled={
                !shopname ||
                (!shopname && tags.length === 0) ||
                (tags.length > 0 && !shopname) ||
                tags.length === 0 ||
                shopname.length < 4 ||
                shopname.length >= 30 ||
                !shopname.trim()
              }
              fullWidth
            >
              Create Store
            </Button>
          </div>
          {/* --------------------------- */}
        </div>
      </Container>
    </div>
  );
}
