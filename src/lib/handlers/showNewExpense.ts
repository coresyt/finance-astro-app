import type { ExpenseDataStorage } from "@/types";
import expensesType from "@lib/expenses";
import { $ } from "@lib/element";

export default function handlerShowNewExpense({
	expenseAmount,
	createAt,
	expenseName,
	id,
	...rest
}: ExpenseDataStorage) {
	const $templateExpenseItem = $("template#template-expense-item");
	if ($templateExpenseItem instanceof HTMLTemplateElement) {
		const $itemCloned = $templateExpenseItem.content.cloneNode(true);
		const $section = $itemCloned.childNodes[1];
		if ($section instanceof HTMLElement) {
			$section.setAttribute("data-id", id);
			$section.setAttribute("id", id);

			$section.querySelector("#expense-item-title")!.textContent = expenseName;

			$section.querySelector("#expense-item-amount")!.textContent =
				expenseAmount;

			$section.querySelector("#expense-item-date")!.textContent = createAt;

			if (typeof rest.expenseTypeEnterprise === "string") {
				const type = Object.entries(expensesType["enterprise"]).find(
					([, { value }]) => value === rest.expenseTypeEnterprise
				);

				if (!type)
					$section.querySelector("#expense-item-type")!.textContent =
						rest.expenseTypeEnterprise;
				else
					$section.querySelector("#expense-item-type")!.textContent =
						type[1].label;
			} else if (typeof rest.expenseTypePersonal === "string") {
				const type = Object.entries(expensesType["personal"]).find(
					([, { value }]) => value === rest.expenseTypePersonal
				);
				if (!type)
					$section.querySelector("#expense-item-type")!.textContent =
						rest.expenseTypePersonal;
				else
					$section.querySelector("#expense-item-type")!.textContent =
						type[1].label;
			}
		}

		const $container = $("#expenses-container");
		if ($container instanceof HTMLElement) {
			$container.append($itemCloned);
		}
	}
}
