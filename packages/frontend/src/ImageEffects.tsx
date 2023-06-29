// class to rotate image
export const rotationClass = (rotation: number): string => {
  switch (rotation) {
    case 90:
      return `rotate-90`;
    case 180:
      return `rotate-180`;
    default:
      return '';
  }
};
