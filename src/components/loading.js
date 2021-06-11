import React from 'react';

export function Loader() {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export function ErrorAlert({ error }) {
  return <p className="alert error-alert">{error}</p>;
}

export function InfoAlert({ message }) {
  return <div className="alert info-alert">{message}</div>;
}
