"use client";

import PatientForm from "@/components/Ui/formPatient";
import { validateUser } from "@/lib/middleware";
import { useEffect } from "react";

const PasienPendaftaran = () => {
  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div>
      <PatientForm></PatientForm>
    </div>
  );
};

export default PasienPendaftaran;
