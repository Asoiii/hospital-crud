"use client";

import React from "react";

const createPatientLayout = ({ children }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <h1>Tambah Data Pasien</h1>
      {children}
    </div>
  );
};

export default createPatientLayout;
