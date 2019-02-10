using React;
using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(day13_reactjsNET.ReactConfig), "Configure")]

namespace day13_reactjsNET
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration.AddScript("~/Scripts/App.js");
            JsEngineSwitcher.Instance.DefaultEngineName = V8JsEngine.EngineName;
            JsEngineSwitcher.Instance.EngineFactories.AddV8();
        }
	}
}