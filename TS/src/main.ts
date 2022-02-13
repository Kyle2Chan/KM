import GameInit from "core/GameInit";
import GameStatus from "core/utils/GameStatus";
import Timer from "core/utils/Timer";
import CSharp from "csharp";

GameInit.start();

function update(deltaTime: number) {
	Timer.updateAllTimers();
	GameStatus.update(deltaTime);
}

function lateUpdate(deltaTime: number) {}

function quit() {}

function register(csRegister: CSharp.GameStart) {
	csRegister.Register(update, lateUpdate, quit);
}

export default register;
