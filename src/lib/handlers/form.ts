import { $ } from "@lib/element";
import { formatExpense } from "@lib/formatExpense";
import handleInput from "@lib-handlers/input";
import handlerShowNewExpense from "@lib-handlers/showNewExpense";
import type { ExpenseDataStorage, ExpenseFormData } from "@/types";

export default function handlerForm(form: HTMLFormElement) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const $expenseAmount = $("#expense-amount");
		const $expenseName = $("#expense-name");
		const $expenseSelectEnterprise = $("#expense-type-enterprise");
		const $expenseSelectPersonal = $("#expense-type-personal");

		if (
			$expenseName instanceof HTMLInputElement &&
			$expenseAmount instanceof HTMLInputElement &&
			$expenseSelectEnterprise instanceof HTMLSelectElement &&
			$expenseSelectPersonal instanceof HTMLSelectElement
		) {
			const result1 = handleInput($expenseName);
			const result2 = handleInput($expenseAmount);

			if (result1 !== true || result2 !== true)
				return alert("Fill the all blank's field's");

			const date = new Date();
			const formData = new FormData(form);
			const { expenseName, expenseAmount, ...restData } = Object.fromEntries(
				formData.entries()
			) as unknown as ExpenseFormData;

			const newExpense: ExpenseDataStorage = {
				id: crypto.randomUUID(),
				createAt: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
				expenseName,
				expenseAmount: formatExpense(parseInt(expenseAmount)),
				...restData,
			};

			const expensesExisting = JSON.parse(
				localStorage.getItem("expenses") || "[]"
			);

			localStorage.setItem(
				"expenses",
				JSON.stringify([...expensesExisting, newExpense])
			);

			$expenseName.value = "";
			$expenseAmount.value = "";

			if (!document.startViewTransition) handlerShowNewExpense(newExpense);
			else
				document.startViewTransition(() => handlerShowNewExpense(newExpense));
		}
	});
}
