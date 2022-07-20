import React from "react";

function Indicator(props) {
    return (
        <div
            style={{
                backgroundColor: "#6B6E74",
                textAlign: "center",
                boxShadow: "0px 10px 10px rgba(0,0,0,0.2)",
                padding: "120px",
            }}
        >

            <div
                style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#a0d2eb",
                    textTransform: "uppercase",
                }}
            >
                {props.shopName}
            </div>
            <div style={{ fontSize: "30px", fontWeight: "bold", color: "#FFFFFF" }}>
                {props.indicator}
            </div>
        </div>

    );
}

export default Indicator;
