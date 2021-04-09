import React from "react";

export default function Suspense(props) {
  const { loading, fallback, children, error } = props;

  if (loading) return fallback;
  if (error) return <p>{error.message}</p>;

  return children;
}
