import React from "react";
import FancyBorder from "../ex1/FancyBorder";
import "../ex1/FancyBorder.css";
import "./Dialog.css";

function Dialog(props) {
    return (
        <FancyBorder color={"blue"}>
            <div className="dialog">
                <h1 className="Dialog-title">{props.title}</h1>
                <p className="Dialog-message">{props.message}</p>
                {props.children}
            </div>
        </FancyBorder>
    );
}

export default Dialog;