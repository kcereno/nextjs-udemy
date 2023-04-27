export const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const createSlug = (string: string) => string.replace(/\.md$/, '');
