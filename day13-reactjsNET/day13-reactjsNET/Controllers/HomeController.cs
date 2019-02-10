using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using day13_reactjsNET.Models;
namespace day13_reactjsNET.Controllers
{
    public class HomeController : Controller
    {

        Rooms db = new Rooms();
        ApplicationDbContext ad = new ApplicationDbContext();

        public class success
        {
            public string message = "success";
        }

        public class fail
        {
            public string message = "failure";
        }

        public ActionResult Index()
        {
            List<room> myList = getRooms();
            ViewBag.rooms = myList;
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

        public ActionResult addRoom(room room)
        {
            room.void_ind = "n";
            try
            {
                db.rooms.Add(room);
                db.SaveChanges();
                return Json(new success());
            }
            catch
            {
                return Json(new fail());
                throw;
            }
        }

        public List<room> getRooms()
        {
            return ad.rooms.ToList();
        }    
        }
}