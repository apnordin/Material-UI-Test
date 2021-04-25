import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function Main () {

    const [btnColor, setBtnColor]= useState("primary");

    const changeColor = () => {
        if (btnColor === "primary") {
            setBtnColor("secondary")
        } else {
            setBtnColor("primary")
        }
    }

    return (
        <Button id="hello-world" variant="contained" color={btnColor} onClick={changeColor}>
            Change colors!
        </Button>
    );
}