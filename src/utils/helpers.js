// Utility helper functions
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount)
}
