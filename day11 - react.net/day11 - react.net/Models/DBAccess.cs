using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace day11___react.net.Models
{
    public class DBAccess
    {
        //this class will handle interaction between the user and datbase, 
        //all adding/getting/deleting/editing is done here


        reactnetContext db = new reactnetContext();

        public IEnumerable<Rooms> getAllRooms()
        {
            try
            {
                return db.Rooms.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddRoom(Rooms room)
        {
            try
            {
                db.Rooms.Add(room);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateRoom(Rooms room)
        {
            try
            {
                db.Entry(room).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Rooms GetRoomInfo (int id)
        {
            try
            {
                Rooms room = db.Rooms.Find(id);
                return room;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteRoom(int id)
        {
            try
            {
                Rooms room = db.Rooms.Find(id);
                db.Rooms.Remove(room);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<Reservations> getAllReservations()
        {
            try
            {
                return db.Reservations.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddReservations(Reservations res)
        {
            try
            {
                db.Reservations.Add(res);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateReservations(Reservations res)
        {
            try
            {
                db.Entry(res).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Reservations GetReservationsInfo(int id)
        {
            try
            {
                Reservations res = db.Reservations.Find(id);
                return res;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteReservations(int id)
        {
            try
            {
                Reservations res = db.Reservations.Find(id);
                db.Reservations.Remove(res);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }





    }
}
