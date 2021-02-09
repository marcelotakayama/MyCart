using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCartAPI.Models {
    public class CartDetail {
        public int IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string CodeProduct { get; set; }
        public string PriceProduct { get; set; }
    }
}
