const colors = ["yellow", "blue", "red" , "orange"]
let i = 0
while( i< colors.length){
    console.log(colors[i]);
    i++
}

for (let i=0; i<colors.length; i++){
    console.log(colors[i]);
}


colors.forEach((color)=> console.log(color))

// const profiel ={
//     auto : "volvo",
//     huis: "Amsterdam",
//     fiets: "batavus",
//     vervoer: "metro",
//     markt: "albert cuyp"
// }

// for (x in profiel){
//     console.log(profiel(x));
// }

// niet mogelijk !!!!