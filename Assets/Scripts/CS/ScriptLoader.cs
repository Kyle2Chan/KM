using System.IO;
using Puerts;
using UnityEngine;
public class ScriptLoader: ILoader
{
	private static ScriptLoader _i;
	private string _rootPath;
	public ScriptLoader()
	{
		_rootPath = PathDefine.PATH_TS_SCRIPT;
	}
	public static ScriptLoader I => _i ??= new ScriptLoader();

	public bool FileExists(string filepath)
	{
		return File.Exists(Path.Combine(_rootPath, filepath));
	}
	public string ReadFile(string filepath, out string debugpath)
	{
		debugpath = Path.Combine(_rootPath, filepath);
		return File.ReadAllText(debugpath);
	}
}
