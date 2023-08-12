import React from "react";

export default function PageNotFound() {
  const handleBackToHome = () => {
    window.location.href = "/"; // Redirect to the home route
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-red-500 mb-2">404 Error</h1>
        <p className="text-lg text-white">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={handleBackToHome}
          className="text-white bg-primary_bg p-2 px-4 rounded-lg"
        >
          back to home
        </button>
      </div>
    </div>
  );
}
