using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace MyCartAPI.Models {
    public class CartDetail {
        [Key]
        public int IdProduct { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string NameProduct { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string CodeProduct { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PriceProduct { get; set; }
    }
}
