export function formatToLocaleNumber(quantidade) {
    const quantidadeNumber = Number(quantidade);
    const options = { style: "decimal", maximumFractionDigits: 1, };

    return new Intl.NumberFormat("pt-BR", options).format(quantidadeNumber);
};
