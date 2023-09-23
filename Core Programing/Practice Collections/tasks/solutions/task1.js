// Usable properties
export default function (data) {
  // your code starts here
  return data.map((obj) => {
  const usables = obj.usable;
  const filteredUsebles = Object.entries(obj).filter(([key]) => usables.includes(key))
  return Object.fromEntries(filteredUsebles)
  });
  // your code ends here
}