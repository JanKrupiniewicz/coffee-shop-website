"use client";

import { motion } from "framer-motion";

interface PageHeaderProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <motion.h1
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="text-5xl fraunces my-5 text-center"
    >
      {props.children}
    </motion.h1>
  );
};

export default PageHeader;
