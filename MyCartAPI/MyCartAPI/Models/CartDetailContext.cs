using Microsoft.EntityFrameworkCore;

namespace MyCartAPI.Models {
    public class CartDetailContext : DbContext {
        public CartDetailContext(DbContextOptions<CartDetailContext> options) : base(options) {
        }

        public DbSet<CartDetail> CartDetails { get; set; }
    }
}
