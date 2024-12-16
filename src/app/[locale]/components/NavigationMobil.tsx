"use client";

import React from "react";

interface NavMobilProps {
  data: {
    MenuItems: {
      label: string;
      route: string;
    }[];
  };
  home: string;
  about: string;
  activity: string;
  gallery: string;
  contact: string;  
  faq: string;
}

function NavigationMobil({ data, home, about, activity, gallery , contact, faq}: NavMobilProps) {
  console.log("data", data);
  console.log("home", home);
  console.log("about", about);

  return <div>
    <p>{home}</p>
    <p>{about}</p>
    <p>{activity}</p>
    <p>{gallery}</p>
    <p>{contact}</p>
    <p>{faq}</p>
  </div>;
}

export default NavigationMobil;
