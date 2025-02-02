import type { ExpenseDataStorage } from "@/types";
import { $ } from "@lib/element";
import handlerShowExpenses from "@lib-handlers/showExpenses";

export default function handlerDeleteExpense(ev: MouseEvent) {
	ev.preventDefault();

	const target = ev.target;
	const allExpenses = JSON.parse(
		localStorage.getItem("expenses") || "[]"
	) as ExpenseDataStorage[];
	const $expensesContainer = $("main#expenses-container");

	if (
		target instanceof HTMLButtonElement &&
		$expensesContainer instanceof HTMLElement
	) {
		const parent = target.parentElement;

		if (parent instanceof HTMLElement) {
			const id = parent.id;

			const allFilteredExpenses = allExpenses.filter((el) => el.id !== id);

			localStorage.setItem("expenses", JSON.stringify(allFilteredExpenses));

			$expensesContainer.innerHTML = "";
			if (!document.startViewTransition) handlerShowExpenses();
			else document.startViewTransition(() => handlerShowExpenses());
		}
	}
}
