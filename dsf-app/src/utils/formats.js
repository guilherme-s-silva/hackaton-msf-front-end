export function formatToLocaleNumber(quantidade) {
    const quantidadeNumber = Number(quantidade);
    const options = { style: "decimal", maximumFractionDigits: 1, };

    return new Intl.NumberFormat("pt-BR", options).format(quantidadeNumber);
};

export function capitalize(str) {
	if (typeof str !== 'string') {
		return '';
	}
    
	return str.charAt(0).toUpperCase() + str.substring(1);
};
