using System.IO;
using UnityEngine;
public struct PathDefine
{
	public static readonly string PATH_TS_SCRIPT = Path.Combine(Application.dataPath , "../TS/dist");
	public static readonly string PATH_CS_WRAP = Path.Combine(Application.dataPath , "Scripts/Gen/");
	public static readonly string PATH_CS_DECLARE = Path.Combine(Application.dataPath , "../TS/csDeclare/");
}
