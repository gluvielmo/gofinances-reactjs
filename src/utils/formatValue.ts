const formatValue = (value: number, transaction?: string): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
