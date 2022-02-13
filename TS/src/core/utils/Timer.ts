import GameStatus from "./GameStatus";
import Handler from "./Handler";
import Pool, { PoolObject } from "./Pool";

export default class Timer extends PoolObject {
	private static _timers: Map<number, Timer> = new Map<number, Timer>();
	private _id: number;
	private static _ID = 0;
	private _handler: Handler;
	private _caller: unknown;
	private _disposed: boolean;
	protected _interval: number;
	protected _startTime: number;
	private _once: boolean;
	private _running: boolean;

	protected constructor() {
		super();
		this._id = ++Timer._ID;
		Timer._timers.set(this._id, this);
	}

	onReUse(): void {
		this._id = ++Timer._ID;
		Timer._timers.set(this._id, this);
	}

	onRecycle(): void {
		Timer._timers.delete(this._id);
		this._id = 0;
		this._running = false;
	}

	public get id() {
		return this._id;
	}

	public dispose() {
		this._disposed = true;
		this._running = false;
		Timer._timers.delete(this._id);
	}

	protected check() {
		return !this._disposed && this._running;
	}

	private update() {
		if (this.check() && this._handler) {
			this._handler.execute();
			if (this._once) {
				this.recycle();
			}
		}
	}

	public static updateAllTimers() {
		this._timers.forEach((v) => {
			v.update();
		});
	}

	/**
	 * 以固定的帧间隔执行目标方法
	 * @param interval 定时器间隔(帧)
	 * @param caller 调用者
	 * @param func 执行方法
	 * @param args 执行参数
	 * @param once 是否执行一次后停止
	 * @returns 计时器
	 */
	public static frame(
		interval: number,
		caller: unknown,
		func: Function,
		args?: unknown[],
		once = false
	): Timer {
		const timer = Pool.get<FrameTimer>(FrameTimer) || new FrameTimer();
		if (interval <= 0) {
			interval = 1;
		}
		timer._interval = interval;
		timer._startTime = GameStatus.frames;
		timer._once = once;
		timer._caller = caller;
		timer._handler = Handler.create(caller, func, args, once);
		timer._running = true;
		return timer;
	}

	/**
	 * 以时间间隔interval执行目标方法，由于需要等待一帧完成后才能执行，不能保证每次执行的间隔都是正确的
	 * @param interval 定时器间隔(毫秒)
	 * @param caller 调用者
	 * @param func 执行方法
	 * @param args 执行参数
	 * @param once 是否执行一次后停止
	 * @returns 计时器
	 */
	public static tick(
		interval: number,
		caller: unknown,
		func: Function,
		args?: unknown[],
		once = false
	): Timer {
		if (interval <= 0) {
			interval = 1;
		}
		const timer = Pool.get<TickTimer>(TickTimer) || new TickTimer();
		timer._interval = interval;
		timer._startTime = Date.now();
		timer._once = once;
		timer._caller = caller;
		timer._handler = Handler.create(caller, func, args, once);
		timer._running = true;
		return timer;
	}

	public static clearAll(caller: unknown): void {
		if (caller) {
			this._timers.forEach((v) => {
				if (v._caller === caller) {
					v.recycle();
				}
			});
		}
	}
}

class FrameTimer extends Timer {
	protected check(): boolean {
		if (!super.check()) {
			return false;
		}
		if (GameStatus.frames >= this._startTime + this._interval) {
			this._startTime = GameStatus.frames;
			return true;
		}
		return false;
	}
}

class TickTimer extends Timer {
	protected check(): boolean {
		if (!super.check()) {
			return false;
		}
		if (Date.now() >= this._startTime + this._interval) {
			this._startTime = Date.now();
			return true;
		}
		return false;
	}
}
