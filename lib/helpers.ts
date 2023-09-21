export const separateLastWordOfText = (text: string) => {
  const textSplit = text.split(' ');
  const textEnd = textSplit.pop();
  const textStart = textSplit.join(' ');

  return { textStart, textEnd };
};

export const validateMailOptions = (contactForm: {
  name: string;
  email: string;
  message: string;
}): string => {
  if (!contactForm.name) return 'Please enter a name';
  if (!contactForm.email) return 'Please enter an email';
  if (!contactForm.message) return 'Please enter a message';

  return '';
};
