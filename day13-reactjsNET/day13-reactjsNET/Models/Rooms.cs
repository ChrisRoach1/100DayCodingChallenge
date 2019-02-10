namespace day13_reactjsNET.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Rooms : DbContext
    {
        public Rooms()
            : base("name=Rooms")
        {
        }

        public virtual DbSet<room> rooms { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<room>()
                .Property(e => e.room_name)
                .IsUnicode(false);

            modelBuilder.Entity<room>()
                .Property(e => e.room_num)
                .IsUnicode(false);

            modelBuilder.Entity<room>()
                .Property(e => e.room_desc)
                .IsUnicode(false);

            modelBuilder.Entity<room>()
                .Property(e => e.void_ind)
                .IsUnicode(false);
        }
    }
}
