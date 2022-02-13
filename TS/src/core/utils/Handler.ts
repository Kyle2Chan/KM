import Pool, { PoolObject } from "./Pool";

export default class Handler extends PoolObject {
	private _caller: unknown;
	private _func: Function;
	private _args: unknown[];
	private _once: boolean;

	onRecycle(): void {
		this._caller = null;
		this._func = null;
		this._args = null;
		this._once = false;
	}
	onReUse(): void {}

	private set(
		caller: unknown,
		func: Function,
		args: unknown[],
		once: boolean
	): Handler {
		this._caller = caller;
		this._func = func;
		this._args = args;
		this._once = once;
		return this;
	}

	public static create(
		caller: unknown,
		func: Function,
		args: unknown[],
		once = true
	): Handler {
		return (Pool.get<Handler>(Handler) || new Handler()).set(
			caller,
			func,
			args,
			once
		);
	}

	public execute() {
		if (!this._caller) {
			console.error("can not find caller");
			return;
		}
		if (!this._func) {
			console.error("can not find function to call");
			return;
		}
		this._func.apply(this._caller, this._args);
		if (this._once) {
			this.recycle();
		}
	}
}
