import { ReactNode } from "react";
import { motion } from "framer-motion";

interface NavigationButtonProps {
    onClick: () => void;
    icon: ReactNode;
    direction: 'left' | 'right';
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ onClick, icon, direction }) => {
    const style = {
        [direction === 'left' ? 'left' : 'right']: '1rem'
    };

    return (
        <motion.button
            className="absolute bg-white bg-opacity-20 rounded-full p-2 hover:shadow-xl"
            onClick={onClick}
            style={style}
            whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, duration: 0.1 }}
        >
            {icon}
        </motion.button>
    );
}

export default NavigationButton;
