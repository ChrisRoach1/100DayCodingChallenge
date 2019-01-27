using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using day11___react.net.Models;
namespace day11___react.net.Controllers
{
    public class ReservationsController : Controller
    {
        DBAccess db = new DBAccess();
        public class resDetails
        {
            public int RoomId;
            public DateTime ResDt;
            public int NumberGuests;
        }


        [HttpGet]
        [Route("api/Reservations/Index")]
        public IEnumerable<Reservations> Index()
        {
            return db.getAllReservations();
        }

        [HttpPost]
        [Route("api/Reservations/Create")]
        public int Create([FromBody]resDetails res)
        {
            Reservations toAdd = new Reservations();
            toAdd.ResDt = res.ResDt;
            toAdd.RoomId = res.RoomId;
            toAdd.NumberGuests = res.NumberGuests;

            return db.AddReservations(toAdd);
        }

        [HttpGet]
        [Route("api/Reservations/Details/{id}")]
        public Reservations details(int id)
        {
            return db.GetReservationsInfo(id);
        }

        [HttpPut]
        [Route("api/Reservations/Edit")]
        public int Edit(Reservations res)
        {
            return db.UpdateReservations(res);
        }

        [HttpDelete]
        [Route("api/Reservations/Delete/{id}")]
        public int Delete(int id)
        {
            return db.DeleteReservations(id);
        }
    }
}