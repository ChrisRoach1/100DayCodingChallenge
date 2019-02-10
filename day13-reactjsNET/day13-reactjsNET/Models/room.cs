namespace day13_reactjsNET.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class room
    {
        [Key]
        public int room_id { get; set; }

        [Required]
        [StringLength(255)]
        public string room_name { get; set; }

        [Required]
        [StringLength(10)]
        public string room_num { get; set; }

        [StringLength(255)]
        public string room_desc { get; set; }

        public int capacity { get; set; }

        [Required]
        [StringLength(1)]
        public string void_ind { get; set; }
    }
}
