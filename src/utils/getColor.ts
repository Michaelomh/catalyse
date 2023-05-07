export const getMainColor = (colorScheme: string | undefined) => {
  switch (colorScheme) {
    case 'grey':
      return 'grey.400';
    case 'red':
      return 'red.400';
    case 'orange':
      return 'orange.400';
    case 'yellow':
      return 'yellow.400';
    case 'green':
      return 'green.400';
    case 'teal':
      return 'teal.400';
    case 'cyan':
      return 'cyan.400';
    case 'purple':
      return 'purple.400';
    case 'pink':
      return 'pink.400';
    case 'blue':
    default:
      return 'blue.400';
  }
};

export const getDarkColor = (colorScheme: string | undefined) => {
  switch (colorScheme) {
    case 'grey':
      return 'grey.600';
    case 'red':
      return 'red.600';
    case 'orange':
      return 'orange.600';
    case 'yellow':
      return 'yellow.600';
    case 'green':
      return 'green.600';
    case 'teal':
      return 'teal.600';
    case 'cyan':
      return 'cyan.600';
    case 'purple':
      return 'purple.600';
    case 'pink':
      return 'pink.600';
    case 'blue':
    default:
      return 'blue.600';
  }
};

export const getDarkerColor = (colorScheme: string | undefined) => {
  switch (colorScheme) {
    case 'grey':
      return 'grey.800';
    case 'red':
      return 'red.800';
    case 'orange':
      return 'orange.800';
    case 'yellow':
      return 'yellow.800';
    case 'green':
      return 'green.800';
    case 'teal':
      return 'teal.800';
    case 'cyan':
      return 'cyan.800';
    case 'purple':
      return 'purple.800';
    case 'pink':
      return 'pink.800';
    case 'blue':
    default:
      return 'blue.800';
  }
};

export const getlightColor = (colorScheme: string | undefined) => {
  switch (colorScheme) {
    case 'grey':
      return 'grey.200';
    case 'red':
      return 'red.200';
    case 'orange':
      return 'orange.200';
    case 'yellow':
      return 'yellow.200';
    case 'green':
      return 'green.200';
    case 'teal':
      return 'teal.200';
    case 'cyan':
      return 'cyan.200';
    case 'purple':
      return 'purple.200';
    case 'pink':
      return 'pink.200';
    case 'blue':
    default:
      return 'blue.200';
  }
};
