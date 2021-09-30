///get the number of the handshakes between a group of persons.
/// math formula is  n*(n - 1)/2.
const getHandShakes = (persons: number): number => {
  return (persons * (persons - 1)) / 2;
};
