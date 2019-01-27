using System;
using System.Collections.Generic;

namespace day11___react.net.Models
{
    public partial class Rooms
    {
        public Rooms()
        {
            Reservations = new HashSet<Reservations>();
        }

        public int RoomId { get; set; }
        public string RoomName { get; set; }
        public string RoomNum { get; set; }
        public string RoomDesc { get; set; }
        public int Capacity { get; set; }
        public string VoidInd { get; set; }

        public virtual ICollection<Reservations> Reservations { get; set; }
    }
}
