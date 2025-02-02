import { $, $IN } from "@lib/element";

export default function () {
	const $changeTypeButton = $("div#expense-change-type button");
	const $typeElementPersonal = $("select#expense-type-personal");
	const $typeElementEnterprise = $("select#expense-type-enterprise");
	const $divTypeElementPersonal = $("div#label-expense-type-personal");
	const $divTypeElementEnterprise = $("div#label-expense-type-enterprise");
	const $labelExpensePersonal = $("label#label-expense-personal");
	const $labelExpenseEnterprise = $("label#label-expense-enterprise");

	if ($changeTypeButton instanceof HTMLButtonElement) {
		const $circle = $IN($changeTypeButton, "div");
		$changeTypeButton.addEventListener("click", (ev) => {
			ev.preventDefault();

			if (
				$divTypeElementEnterprise instanceof HTMLDivElement &&
				$divTypeElementPersonal instanceof HTMLDivElement &&
				$typeElementEnterprise instanceof HTMLSelectElement &&
				$typeElementPersonal instanceof HTMLSelectElement &&
				$labelExpenseEnterprise instanceof HTMLLabelElement &&
				$labelExpensePersonal instanceof HTMLLabelElement
			) {
				const timeout = setTimeout(() => {
					const expenseChangeTypeFunction = () => {
						if ($typeElementEnterprise.hidden === true) {
							$typeElementEnterprise.hidden = false;
							$typeElementPersonal.hidden = true;

							$typeElementEnterprise.selectedIndex = 0;
							$typeElementPersonal.selectedIndex = -1;

							$divTypeElementEnterprise.hidden = false;
							$divTypeElementPersonal.hidden = true;
						} else {
							$typeElementEnterprise.hidden = true;
							$typeElementPersonal.hidden = false;

							$typeElementEnterprise.selectedIndex = -1;
							$typeElementPersonal.selectedIndex = 0;

							$divTypeElementEnterprise.hidden = true;
							$divTypeElementPersonal.hidden = false;
						}

						clearTimeout(timeout);

						$labelExpenseEnterprise.hidden = $typeElementEnterprise.hidden;
						$labelExpensePersonal.hidden = $typeElementPersonal.hidden;
					};
					if ($circle instanceof HTMLDivElement) {
						$circle.classList.toggle("init");
						$circle.classList.toggle("fin");

						if (document.startViewTransition)
							return document.startViewTransition(() =>
								expenseChangeTypeFunction()
							);
						else return expenseChangeTypeFunction();
					}
				}, 250);
			}
		});
	}
}
