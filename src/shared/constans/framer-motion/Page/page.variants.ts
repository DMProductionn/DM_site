export const pageVariants = {
  initial: {
    filter: 'blur(10px)',
    opacity: 0,
  },
  in: {
    filter: 'blur(0px)',
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'backOut',
    },
  },
  out: {
    filter: 'blur(10px)',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'backIn',
    },
  },
};
