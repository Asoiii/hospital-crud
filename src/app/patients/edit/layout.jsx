"use client";

import React from "react";

const PatientEditLayout = ({ children }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <h2>Edit Data Pasien</h2>
      {children}
    </div>
  );
};

export default PatientEditLayout;
