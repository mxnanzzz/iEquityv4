const Products = [
    {
    id: 1,
    name: "Epson EcoTank L121 A4 Ink Tank Printer",
    price: 6500,
    image:require( "../assets/productpics/Epson.png"),
    description: "ExpectExpect great efficiency when printing with the EcoTank L121",
    },
    {
    id: 2,
    name: "HP 131A Black Original LaserJet Toner Cartridge, CF210A",
    price: 4070,
    image:require( "../assets/productpics/HP 131A.png"),
    description: "Make documents and marketing materials look professional when you print with Original HP LaserJet toner cartridges",
    },
    {
    id: 3,
    name: "ADATA Ultimate SU800 256GB 2.5",
    price: 2800,
    image:require( "../assets/productpics/ADATA.png"),
    description: "The SU800 solid state drive lives up to its Ultimate name with 3D NAND Flash that provides higher storage density, efficiency, and reliability than traditional 2D NAND.",
    },
    {
    id: 4,
    name: "EZVIZ C8W 4MP",
    price: 4999,
    image: require( "../assets/productpics/EZVIZ.png"),
    description: "As a new addition to the EZVIZ C8 Pan & Tilt Series, the C8W upgrades 360° panoramic protection with the ultra 2K+ video clarity. It also integrates the must-have features required for advanced security, including AI-powered human shape detection, color night vision, two-way communication and active defense.",
    },
    {
    id: 5,
    name: "Grandstream DP720 Dect Cordless Headset",
    price: 5460,
    image:require( "../assets/productpics/Grandstream.png"),
    description: "The DP720 is a DECT cordless HD handset for mobility and allows the user to move freely and efficiently throughout any work environment and is supported by the DP750 DECT VoIP base station.",
    }
]

export function gogetProducts(){
    return Products;
} 

export function gogetProducts(id) {
    return (Products).find((Products)=>Products.id==id); 
}

