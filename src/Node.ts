export default class Node<T> {
	public val: T | null;
	public next: Node<T> | null;
	public prev: Node<T> | null;

	constructor(
		val: T,
		next: Node<T> | null = null,
		prev: Node<T> | null = null
	) {
		this.val = val;
		this.next = next;
		this.prev = prev;
	}
}
