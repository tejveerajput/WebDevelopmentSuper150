const mongoose = require('mongoose');
const Product = require('./model/Product');

let Products = [
    {
        name:"Moji ji" , 
        img : "https://indianmemetemplates.com/wp-content/uploads/narendra-modi-funny-reaction-at-the-parliament.jpg" ,
        price : 100,
        desc : "Wah Modi ji Wah"
    }, 
    {
        name:"Meloni ji" , 
        img : "https://i.guim.co.uk/img/media/0b3e305d8772b3d0513334901dc33b2bb9c8cf7d/0_77_3072_1843/500.jpg?quality=85&auto=format&fit=max&s=66b473e14becfe1a926aaa2f667049cb",
        price : 1000,
        desc : "I want modi ji"
    }, 
    {
        name:"kejriwal" , 
        img : "https://www.oneindia.com/img/2014/03/27-arvindkejriwal-in-varanasi13.jpg" ,
        price : 10000,
        desc : "Zheelo ka shahar"
    },
    {
        name:"Pappu" , 
        img : "https://bharatiyavishwa.com/wp-content/uploads/2020/06/rahul-gandhi-winking.jpg",
        price : 100000,
        desc : "Allo dalo sona nikalo"
    },
    {
        name:"Mamata banerjee",
        img: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/06/09/1051759-webp.net-resizeimage-2022-06-09t132007.197.jpg?im=Resize=(1280,720)",
        price: 100000000,
        desc : "Humba Humba rumba rumba tamma tamma"
    }
]

async function seedDB(){
    await Product.insertMany(Products);
    console.log("Data seeded");
}

module.exports = seedDB;