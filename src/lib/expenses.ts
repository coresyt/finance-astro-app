const expensesType = {
	enterprise: {
		operating: {
			value: "expense-enterprise-operating",
			label: "Operating Expenses",
		},
		personnel: {
			value: "expense-enterprise-personnel",
			label: "Personnel Expenses",
		},
		production: {
			value: "expense-enterprise-occasional",
			label: "Production Costs",
		},
		marketing: {
			value: "expense-enterprise-marketing",
			label: "Sales and Marketing Expenses",
		},
		financial: {
			value: "expense-enterprise-financial",
			label: "Financial expenses",
		},
		maintenance: {
			value: "expense-enterprise-maintenance",
			label: "Maintenance and Technology Expenses",
		},
		legal: {
			value: "expense-enterprise-legal",
			label: "Legal Compliance Expenses",
		},
		strategic: {
			value: "expense-enterprise-strategic",
			label: "Strategic Expenses",
		},
		nonRecurring: {
			value: "expense-enterprise-noRecurring",
			label: "Non-recurring expenses",
		},
	},
	personal: {
		fixed: {
			value: "expense-personal-fixed",
			label: "Fixed Costs",
		},
		variable: {
			value: "expense-personal-variable",
			label: "Variable Expenses",
		},
		occasional: {
			value: "expense-personal-occasional",
			label: "Occasional Expenses",
		},
		discretionary: {
			value: "expense-personal-discretionary",
			label: "Discretionary Expenses",
		},
		emergency: {
			value: "expense-personal-emergency",
			label: "Emergency expenses",
		},
		personalDevelopment: {
			value: "expense-personal-personal",
			label: "Expenses related to personal development",
		},
	},
} as const;

export default expensesType;
