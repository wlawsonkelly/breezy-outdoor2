import React, { useState, useEffect } from "react";
import CalendarContainer from "../components/CalendarContainer";
import CampaignCard from "../components/CampaignCard";
import CampaignCardWrapper from "../components/CampaignCardWrapper";

import "./style.css";

function Home() {

    const [campaigns, setCampaigns] = useState([]);

    return (
        <div style={{ backgroundColor: "#2F2FA2" }}>
            <div class="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h1 id="current-campaigns-header" style={{color: "white"}}>Current Campaigns</h1>
                    </div>
                    <div className="col-md-8">
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <button type="button" className="btn btn-primary" style={{backgroundColor: "#F64C72"}}>
                                <span className="glyphicon glyphicon-search">Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CampaignCardWrapper>
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
            </CampaignCardWrapper>
            <div class="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 id="current-campaigns-header">Calendar</h1>
                    </div>
                </div>
            </div>
            <CalendarContainer />
        </div>
    );
}

export default Home;