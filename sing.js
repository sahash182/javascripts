var count = prompt("How man verse you want to sing");
for (var count = parseInt(count); count > 0; count--) {
if (count === 2) {
       console.log(count + " " + "bottles of beer on the wall,"); 
       console.log(count + " " + "bottles of beer!");
       console.log("Take one down and pass it around,");
       console.log(count-1 + " " + "bottle of beer on the wall!");
       console.log(" ");
}
else if (count === 1) {
       console.log(count + " " + "bottle of beer on the wall,"); 
       console.log(count + " " + "bottle of beer!");
       console.log("Take one down and pass it around,");
       console.log("No more" + " " + "bottles of beer on the wall!");
       console.log(" ");
}

else {
       console.log(count + " " + "bottles of beer on the wall,"); 
       console.log(count + " " + "bottles of beer!");
       console.log("Take one down and pass it around,");
       console.log(count-1 + " " + "bottles of beer on the wall!");
       console.log(" ");
}
}

         