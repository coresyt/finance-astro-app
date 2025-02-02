const expenseForLocal = {
	"es-ES": "EUR", // España -> Euro
	"es-MX": "MXN", // México -> Peso Mexicano
	"en-US": "USD", // Estados Unidos -> Dólar estadounidense
	"ja-JP": "JPY", // Japón -> Yen japonés
	"fr-FR": "EUR", // Francia -> Euro
	"de-DE": "EUR", // Alemania -> Euro
	"it-IT": "EUR", // Italia -> Euro
	"pt-PT": "EUR", // Portugal -> Euro
	"zh-CN": "CNY", // China -> Yuan Renminbi
	"ru-RU": "RUB", // Rusia -> Rublo ruso
	"ko-KR": "KRW", // Corea del Sur -> Won surcoreano
	"en-GB": "GBP", // Reino Unido -> Libra esterlina
	"nl-NL": "EUR", // Países Bajos -> Euro
	"ar-SA": "SAR", // Arabia Saudita -> Riyal saudí
	"hi-IN": "INR", // India -> Rupia india
	"id-ID": "IDR", // Indonesia -> Rupia indonesia
	"tr-TR": "TRY", // Turquía -> Lira turca
	"pl-PL": "PLN", // Polonia -> Zloty polaco
	"sv-SE": "SEK", // Suecia -> Corona sueca
	"no-NO": "NOK", // Noruega -> Corona noruega
	"fi-FI": "EUR", // Finlandia -> Euro
	"da-DK": "DKK", // Dinamarca -> Corona danesa
	"cs-CZ": "CZK", // República Checa -> Corona checa
	"ro-RO": "RON", // Rumanía -> Leu rumano
	"bg-BG": "BGN", // Bulgaria -> Lev búlgaro
	"hr-HR": "HRK", // Croacia -> Kuna croata
	"el-GR": "EUR", // Grecia -> Euro
	"th-TH": "THB", // Tailandia -> Baht tailandés
	"vi-VN": "VND", // Vietnam -> Dong vietnamita
	"my-MM": "MMK", // Birmania -> Kyat birmano
	"ph-PH": "PHP", // Filipinas -> Peso filipino
	"ke-KE": "KES", // Kenia -> Chelín keniano
	"za-ZA": "ZAR", // Sudáfrica -> Rand sudafricano
	"eg-EG": "EGP", // Egipto -> Libra egipcia
};

export function formatExpense(amount: number) {
	const language = navigator.language || "en-US";
	let fullCurrency = Object.entries(expenseForLocal).find(
		([key]) => key === language
	);
	let currency: string;

	if (!fullCurrency) {
		currency = "USD";
	} else currency = fullCurrency[1];

	const formatoMoneda = new Intl.NumberFormat(language, {
		style: "currency",
		currency: currency,
	});

	return formatoMoneda.format(amount);
}
