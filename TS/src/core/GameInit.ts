import Timer from "./utils/Timer";

export default class GameInit {
	public static start() {
		// new StepPreload().execute();
		Timer.tick(100, this, this.update);
	}

	private static update() {
		console.log(Date.now());
	}
}
