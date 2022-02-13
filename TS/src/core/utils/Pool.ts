export class PoolObject {
	public onRecycle(): void {}
	public onReUse(): void {}
	public recycle() {
		Pool.push(this);
	}
}

export default class Pool {
	private static _dictPool: Map<unknown, PoolObject[]> = new Map<
		unknown,
		PoolObject[]
	>();

	public static get<T extends PoolObject>(type: object): T {
		const pool: T[] = this._dictPool.get(type) as T[];
		if (!pool) {
			return null;
		}
		const obj = pool.pop();
		if (obj) {
			obj.onReUse();
		}
		return obj;
	}

	public static push(obj: PoolObject): void {
		let pool: PoolObject[] = this._dictPool.get(obj.constructor);
		if (!pool) {
			pool = [];
		}
		obj.onRecycle();
		pool.push(obj);
	}
}
