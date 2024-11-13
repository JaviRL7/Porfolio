// src/FadeTransition.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const FadeTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeTransition;
