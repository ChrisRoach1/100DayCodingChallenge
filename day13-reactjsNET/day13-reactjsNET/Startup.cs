using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(day13_reactjsNET.Startup))]
namespace day13_reactjsNET
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
