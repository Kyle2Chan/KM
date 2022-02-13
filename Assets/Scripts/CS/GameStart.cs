using System;
using System.Collections;
using System.Collections.Generic;
using Puerts;
using UnityEditor;
using UnityEngine;
using Object = System.Object;

public class GameStart : MonoBehaviour
{
	private JsEnv env;
	public delegate void JsRegister(GameStart instance);
	private Action<float> jsUpdate;
	private Action<float> jsLateUpdate;
	private Action jsQuit;

	private void Awake()
	{
		env = new JsEnv(ScriptLoader.I);
		env.UsingAction<int>();
		env.UsingAction<float>();
		env.UsingAction<string>();
		env.UsingAction<bool>();
		env.UsingFunc<int>();
		env.UsingFunc<float>();
		env.UsingFunc<string>();
		env.UsingFunc<bool>();
		env.UsingAction<string, string>();
		env.UsingAction<Vector3>();
		env.UsingFunc<Vector3>();
		env.UsingAction<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>();
		env.UsingAction<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>();
		env.UsingAction<UnityEngine.AsyncOperation>();
	}

	void Start()
	{
		JsRegister register = env.Eval<JsRegister>("require('bundle.js').default;");
		register(this);
	}

	public void Register(Action<float> update, Action<float> lateUpdate, Action quit)
	{
		jsUpdate = update;
		jsLateUpdate = lateUpdate;
		jsQuit = quit;

	}
	
	void Update()
	{
		if (env != null)
		{
			env.Tick();
			jsUpdate?.Invoke(Time.unscaledDeltaTime);
		}
	}

	void LateUpdate()
	{
		if (env != null)
		{
			jsLateUpdate?.Invoke(Time.unscaledDeltaTime);
		}
	}

	private void OnDestroy()
	{
		if (env != null)
		{
			jsQuit?.Invoke();
			env.Dispose();
			env = null;
		}
	}
}
