import React from "react";
import "./style.css";

function CampaignCard({ client, campaignTitle, dmas, startDate, endDate, units, percentagePosted }) {
    return (
        <div className="card">
        <div className="img-container">
          <img alt={client} src="" />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Client:</strong> {client}
            </li>
            <li>
              <strong>Campaign Title:</strong> {campaignTitle}
            </li>
            <li>
              <strong>DMAs:</strong> {dmas}
            </li>
            <li>
              <strong>Start Date</strong> {startDate}
            </li>
            <li>
              <strong>End Date</strong> {endDate}
            </li>
            <li>
              <strong># of Units Sold</strong> {units}
            </li>
            <li>
              <strong>% Posted</strong> {percentagePosted}
            </li>
          </ul>
        </div>
      </div>
    )
}

export default CampaignCard;