"use client";

import React from "react";
import NavbarPatiens from "@/components/Ui/navbar-patients";

const PatientLayout = ({ children }) => {
  return (
    <div>
      <NavbarPatiens />
      <main>{children}</main>
    </div>
  );
};

export default PatientLayout;
