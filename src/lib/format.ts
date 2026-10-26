/** 1500 -> «1 500 ₸» */
export function tenge(n: number): string {
  return `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸`;
}

/** Подпись «за час» / «≈ 333 ₸ за час» для строки прайса. */
export function perHour(price: number, hours: number): string {
  return hours > 1 ? `≈ ${tenge(price / hours)} за час` : "за час";
}
