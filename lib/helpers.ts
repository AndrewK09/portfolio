export const separateLastWordOfText = (text: string) => {
  const textSplit = text.split(' ');
  const textEnd = textSplit.pop();
  const textStart = textSplit.join(' ');

  return { textStart, textEnd };
};
