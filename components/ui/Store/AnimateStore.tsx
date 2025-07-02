export const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
    height: "auto",
    opacity: 1,
    transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
    },
    },
    exit: {
    height: 0,
    opacity: 0,
    transition: { type: "tween", duration: 0.2 },
    },
};

export const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};