const reverse = (string) => {

  if(string <= 1) {
    return string
  }

  const first = string[0]
  const rest = string.slice(1)

  return reverse(rest) + first
};

console.log(reverse('Mitko'));
