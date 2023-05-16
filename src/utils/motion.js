const sectionVariant = {
  hidden: {
    opacity: 0,
    clipPath: 'polygon(0 0, 100% 0, 0 0, 0% 100%)',
  },
  show: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  }
}

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  }
}

const textVariant = {
  offscreen: {
    opacity: 0,
    x: -200
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.3
    }
  }
}

const imageVariant = (direction) => ({
  offscreen: {
    opacity: 0.5,
    x: direction === 'left' ? -250 : 250
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1
    }
  }
});

export { sectionVariant, cardVariant, textVariant, imageVariant };