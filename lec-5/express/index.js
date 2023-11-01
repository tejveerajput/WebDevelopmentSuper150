var express = require('express')
var app = express() // object ->entire instance applicaton
// console.log(app)

app.use((req,res)=>{
    console.log("shadi mai jarur aana agar card mile toh");
    //console.log(req);
    // console.log(res);
    res.send(" AB DEKH JATIN   AB  TU   GYA   BETA   DARASHAL   MAI    BOHT   DIN    SAI    ISSI    KHURAK    MAI    THA    AB    DEKH   KESE    SEEHDE     COMMISNER     KO    CALL   KARTA   HU ")
})




app.listen(8080,()=>{
    console.log("server connected at port 8080")
})


