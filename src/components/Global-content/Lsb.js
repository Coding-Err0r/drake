import React from "react";
import data from "../../data";

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src="./assets/images/logo.png" alt="Logo" />
        <span className="designation">{data.designation}</span>
      </div>
      <img className="me" src={data.profilePicture} alt="Me" />
      <h2 className="email">{data.name}</h2>
      <h2 className="address">
        {data.countryOfResidence} , {data.cityOfResidence}
      </h2>

      <ul class="flex-container space-between">
        <i className="las la-envelope flex-item svgIcon"></i>
        <li className="flex-item">{data.email}</li>
        <i className="las la-angle-right flex-item svgIcon"></i>
      </ul>
      <ul class="flex-container space-between">
        <i className="las la-phone flex-item svgIcon"></i>
        <li className="flex-item">
          {data.countryCode}
          {data.personalNunber}
        </li>
        <i className="las la-angle-right flex-item svgIcon"></i>
      </ul>
      <ul class="flex-container space-between">
        <i className="las la-phone flex-item svgIcon"></i>
        <li className="flex-item">
          {data.countryCode}
          {data.personalNunber}
        </li>
        <i className="las la-angle-right flex-item svgIcon"></i>
      </ul>
      <ul class="flex-container space-between">
        <i className="las la-basketball-ball flex-item svgIcon"></i>
        <li className="flex-item">
          {data.premanentAddress && `${data.premanentAddress.slice(0, 28)}...`}
        </li>
        <i className="las la-angle-right flex-item svgIcon"></i>
      </ul>
      <a href="#" className="theme-btn" style={{ margin: "10px 0px 5px 0px" }}>
        <i className="las la-envelope"></i> Connect
      </a>
    </div>
  );
}
