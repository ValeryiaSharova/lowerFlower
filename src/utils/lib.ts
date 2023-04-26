export const formatPhoneNumber = (phoneNumber: string): string | null => {
  const cleaned: string = phoneNumber.replace(/\D/g, '');
  let match: RegExpMatchArray | null = cleaned.match(
    /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/
  );
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  } else {
    match = cleaned.match(/^(\d{1})(\d{10})$/);
    if (match) {
      return `+${match[1]} (${match[2].substr(0, 3)}) ${match[2].substr(
        3,
        3
      )}-${match[2].substr(6, 2)}-${match[2].substr(8, 2)}`;
    }
  }
  return null;
};
