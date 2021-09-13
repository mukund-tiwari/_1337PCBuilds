using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.Configuration.FileExtensions;
using Microsoft.Extensions.Configuration.Json;
using System.Linq;

#nullable disable

namespace _1337PCBuilds.DAL.Models
{
    public partial class _1337PCBuildsDBContext : DbContext
    {
        public _1337PCBuildsDBContext()
        {
        }

        public _1337PCBuildsDBContext(DbContextOptions<_1337PCBuildsDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CustomerPcbuildDetail> CustomerPcbuildDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                       .SetBasePath(Directory.GetCurrentDirectory())
                       .AddJsonFile("appsettings.json");
            var config = builder.Build();
            var connectionString = config.GetConnectionString("1337PCBuildsDBConnectionString");
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<CustomerPcbuildDetail>(entity =>
            {
                entity.HasKey(e => e.EmailId)
                    .HasName("PK__Customer__7ED91ACF78CC1C1C");

                entity.ToTable("CustomerPCBuildDetails");

                entity.HasIndex(e => e.CustomerId, "UQ__Customer__A4AE64D9C5C16591")
                    .IsUnique();

                entity.Property(e => e.EmailId)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.AdditionalNotes)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Budget)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerId).ValueGeneratedOnAdd();

                entity.Property(e => e.DateofEnq)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UseCase)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
