const FORMAT_CURRNECY = new Intl.NumberFormat('egypt', {
    currency: 'EGP',
    style: 'currency',
})
export function formatCurrency(number) {
    return FORMAT_CURRNECY.format(number)
}