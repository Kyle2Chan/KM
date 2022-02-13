export default class EventEmitter {
	private _listeners: unknown[];
	constructor() {
		this._listeners = [];
	}
}
