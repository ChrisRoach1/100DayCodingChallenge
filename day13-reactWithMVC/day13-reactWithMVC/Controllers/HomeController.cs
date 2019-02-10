using System.Web.Mvc;
using System;
using day13_reactWithMVC.Models;
namespace day13_reactWithMVC.Controllers
{
    public class HomeController : Controller
    {

        public class returnMes
        {
            public string message = "success";
        }



        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        public ActionResult testfun()
        {
            return Json(new returnMes(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult postFun(testClass test)
        {
            return Json(new returnMes(), JsonRequestBehavior.AllowGet);
        }
        
    }
}