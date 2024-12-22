"use client";

import React from "react";

const PatientDetailLayout = ({ children }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <h2>Detail Pasien</h2>
      {children}
    </div>
  );
};

export default PatientDetailLayout;
