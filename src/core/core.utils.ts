export const formatFansCount = (count: number): string => {
  const fans = parseFloat((count / 1000).toFixed(2));
  
  return `${Intl.NumberFormat('en-US').format(fans)}k`;
}
