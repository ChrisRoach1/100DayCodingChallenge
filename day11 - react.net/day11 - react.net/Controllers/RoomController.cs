using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using day11___react.net.Models;

namespace day11___react.net.Controllers
{
    public class RoomController : Controller
    {
        DBAccess db = new DBAccess();

        [HttpGet]
        [Route("api/Rooms/Index")]
        public IEnumerable<Rooms> Index()
        {
            return db.getAllRooms();
        }

        [HttpPost]
        [Route("api/Rooms/Create")]
        public int Create(Rooms room)
        {
            return db.AddRoom(room);
        }

        [HttpGet]
        [Route("api/Rooms/Details/{id}")]
        public Rooms details(int id)
        {
            return db.GetRoomInfo(id);
        }

        [HttpPost]
        [Route("api/Rooms/Edit")]
        public int Edit([FromBody]Rooms room)
        {
            return db.UpdateRoom(room);
        }

        [HttpDelete]
        [Route("api/Rooms/Delete/{id}")]
        public int Delete(int id)
        {
            return db.DeleteRoom(id);
        }

    }
}