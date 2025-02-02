type ElementFunctionReturn<K extends Element = Element> = K | null;

export const $ = <T extends Element = Element>(
	element: string
): ElementFunctionReturn<T> => document.querySelector<T>(element);

export const $$ = <T extends Element = Element>(
	element: string
): NodeListOf<T> => document.querySelectorAll<T>(element);

export const $IN = <T extends Element = Element>(
	element: ParentNode,
	toFindElement: string
): ElementFunctionReturn<T> => element.querySelector<T>(toFindElement);

export const $$IN = <T extends Element = Element>(
	element: ParentNode,
	toAllFindElement: string
): NodeListOf<T> => element.querySelectorAll<T>(toAllFindElement);
