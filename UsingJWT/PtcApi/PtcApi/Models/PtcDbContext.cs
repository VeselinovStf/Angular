using Microsoft.EntityFrameworkCore;

namespace PtcApi.Model
{
  public class PtcDbContext : DbContext
  {
      
        public PtcDbContext( DbContextOptions<PtcDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<AppUser> Users { get; set; }
        public DbSet<AppUserClaim> Claims { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().ToTable("Product");
            modelBuilder.Entity<Category>().ToTable("Category");
            modelBuilder.Entity<AppUser>().ToTable("User");
            modelBuilder.Entity<AppUserClaim>().ToTable("UserClaim");

            base.OnModelCreating(modelBuilder);
            
        }

        // private const string CONN =
        //               @"Server=Localhost;
        //                 Database=PTC-Pluralsight;
        //                 Trusted_Connection=True;
        //                 MultipleActiveResultSets=true";

        //private const string CONN = @"Server=(localdb)\SQLEXPRESS;
        //Database=PTC-Pluralsight;
        //AttachDbFilename=H:\HUB\Angular\UsingJWT\SqlData\PTC-Pluralsight.mdf;
        //MultipleActiveResultSets=true";

        //protected override void OnConfiguring(
        //            DbContextOptionsBuilder optionsBuilder)
        //{
        //  optionsBuilder.UseSqlServer(CONN);
        //}
    }
}
