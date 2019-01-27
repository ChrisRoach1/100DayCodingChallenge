using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace day11___react.net.Models
{
    public partial class reactnetContext : DbContext
    {
        public reactnetContext()
        {
        }

        public reactnetContext(DbContextOptions<reactnetContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Reservations> Reservations { get; set; }
        public virtual DbSet<Rooms> Rooms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=den1.mssql7.gear.host;Database=reactnet;User id=reactnet;password=password!");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.1-servicing-10028");

            modelBuilder.Entity<Reservations>(entity =>
            {
                entity.HasKey(e => e.ResId)
                    .HasName("PK__reservat__2090B50DE97E7A60");

                entity.ToTable("reservations");

                entity.Property(e => e.ResId).HasColumnName("res_id");

                entity.Property(e => e.NumberGuests).HasColumnName("number_guests");

                entity.Property(e => e.ResDt).HasColumnName("res_dt");

                entity.Property(e => e.RoomId).HasColumnName("room_id");

                entity.Property(e => e.VoidInd)
                    .IsRequired()
                    .HasColumnName("void_ind")
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('n')");

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.RoomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_roomid");
            });

            modelBuilder.Entity<Rooms>(entity =>
            {
                entity.HasKey(e => e.RoomId)
                    .HasName("PK__rooms__19675A8A27CD3128");

                entity.ToTable("rooms");

                entity.Property(e => e.RoomId).HasColumnName("room_id");

                entity.Property(e => e.Capacity).HasColumnName("capacity");

                entity.Property(e => e.RoomDesc)
                    .HasColumnName("room_desc")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RoomName)
                    .IsRequired()
                    .HasColumnName("room_name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RoomNum)
                    .IsRequired()
                    .HasColumnName("room_num")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.VoidInd)
                    .IsRequired()
                    .HasColumnName("void_ind")
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('n')");
            });
        }
    }
}
