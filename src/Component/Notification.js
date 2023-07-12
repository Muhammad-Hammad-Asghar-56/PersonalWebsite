import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ messages }) => (
  <AnimatePresence>
    {messages.map(({ id, content }) => (
      <motion.li
        key={id}
        initial={{ opacity: 0 }} // Added initial animation
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {content}
      </motion.li>
    ))}
  </AnimatePresence>
);

export default Notification;
