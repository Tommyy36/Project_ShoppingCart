const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR", style: "currency"
})

type formatCurrency = any

export function formatCurrency(any: any) {
    return CURRENCY_FORMATTER.format(any) 
}