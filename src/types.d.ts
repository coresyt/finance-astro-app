export type ExpenseTypeEnterprise =
	| "expense-enterprise-operating"
	| "expense-enterprise-personnel"
	| "expense-enterprise-occasional"
	| "expense-enterprise-marketing"
	| "expense-enterprise-financial"
	| "expense-enterprise-maintenance"
	| "expense-enterprise-legal"
	| "expense-enterprise-strategic"
	| "expense-enterprise-noRecurring";

export type ExpenseTypePersonal =
	| "expense-personal-fixed"
	| "expense-personal-variable"
	| "expense-personal-occasional"
	| "expense-personal-discretionary"
	| "expense-personal-emergency"
	| "expense-personal-personal";

export interface ExpenseFormData {
	expenseName: string;
	expenseAmount: string;
	expenseTypeEnterprise?: ExpenseTypeEnterprise;
	expenseTypePersonal?: ExpenseTypePersonal;
}

export interface ExpenseDataStorage extends ExpenseFormData {
	id: `${string}-${string}-${string}-${string}-${string}`;
	createAt: `${number}/${number}/${number}`;
}
