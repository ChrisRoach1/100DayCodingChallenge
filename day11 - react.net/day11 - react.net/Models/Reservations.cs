using System;
using System.Collections.Generic;

namespace day11___react.net.Models
{
    public partial class Reservations
    {
        public int ResId { get; set; }
        public int RoomId { get; set; }
        public DateTime ResDt { get; set; }
        public int NumberGuests { get; set; }
        public string VoidInd { get; set; }

        public virtual Rooms Room { get; set; }
    }
}
