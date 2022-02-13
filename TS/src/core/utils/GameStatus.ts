import CSharp from "csharp";

export default class GameStatus {
	private static _frames = -1;

	public static get frames() {
		if (this._frames < 0) {
			this._frames = CSharp.UnityEngine.Time.frameCount;
		}
		return this._frames;
	}

	public static update(deltaTime: number) {
		this._frames++;
	}
}
