import React from "react";
import "./style.css";

function CampaignCardWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default CampaignCardWrapper;