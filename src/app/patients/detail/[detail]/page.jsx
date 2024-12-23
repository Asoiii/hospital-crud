"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import usePatientData from "../../../../hooks/Detail/usePatientData";
import LoadingSpinner from "../../../../components/Elements/loading/loading";
import PatientDetails from "../../../../components/Ui/PatientDetail";
import { Alert } from "react-bootstrap";
import { validateUser } from "@/lib/middleware";

const PatientDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { patient, loading, error } = usePatientData(id);

  useEffect(() => {
    validateUser();
  }, []);

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <PatientDetails
      patient={patient}
      onEdit={() => router.push(`/patients/edit/${id}`)}
    />
  );
};

export default PatientDetailPage;
