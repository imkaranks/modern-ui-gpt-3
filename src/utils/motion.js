const sectionVariant = {
  hidden: {
    opacity: 0.5,
    clipPath: 'polygon(0 0, 100% 0, 0 0, 0% 100%)',
  },
  show: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  }
}

const cardVariant = {
  hidden: {
    opacity: 0.5,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  }
}

export { sectionVariant, cardVariant };