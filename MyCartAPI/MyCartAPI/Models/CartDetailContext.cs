using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCartAPI.Models {
    public class CartDetailContext : DbContext {
        public CartDetailContext(DbContextOptions<CartDetailContext> options) : base(options) {
        }

        public DbSet<CartDetail> CartDetails { get; set; }
    }
}
