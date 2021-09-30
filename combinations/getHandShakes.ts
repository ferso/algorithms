///get the number of the handshakes between a group of persons.

const getHandShakes = (persons: number): number => {
  return (persons * (persons - 1)) / 2;
};
