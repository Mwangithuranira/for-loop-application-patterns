let i;
let j;
let row;


//   a rectangle shaped figure

 for (i = 0; i < 7; i++) {
     row = "";
     for (j = 0; j < 7; j++) {
         if (i === 0 || i === 6 || j === 0 || j === 6) {
             row += "*";
         } else {
             row += " ";
         }
     }
     console.log(row);
 }


// // upside triangle  figure
 for ( i = 7; i >= 1; i--) {
      row = "";
     for ( j = i; j >= 1; j--) {
       row += "*";
     }
     console.log(row);
   }




  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
  
  for (let i = 4; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }

  


  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
  
  for (let i = 4; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
  

      

   for (let i = 1; i <= 5; i++) {
     let row = "";
     for (let j = 1; j <= 5 - i; j++) {
       row += " ";
     }
     for (let k = 1; k <= (2 * i - 1); k++) {
       row += "*";
     }
     console.log(row);
   }
  
   for (let i = 4; i >= 1; i--) {
     let row = "";
     for (let j = 1; j <= 5 - i; j++) {
       row += " ";
     }
     for (let k = 1; k <= (2 * i - 1); k++) {
       row += "*";
     }
     console.log(row);
   }
  

// // a right angled triangle
    for (i = 1; i < 7; i++) {
     row = "";
     for (j = 1; j < i; j++) {
         row += "*"
     }
     console.log(row);
 }



// // the 7 otherside shaped figure

 for (i = 1; i < 7; i++) {
     row = "";
    for (j = 0; j < 7; j++) {
         if (i === 0  || i === 6  || j === 0) {
             row += "*";
         } else {
             row += " ";
         }
     }
   console.log(row);
 }
 


// // the 7 shaped figure

 for (i = 1; i < 7; i++) {
     row = "";
     for (j = 0; j < 7; j++) {
         if (i === 0  || j === 6 || i === 6) {
             row += "*";
         } else {
             row += " ";
         }
     }
     console.log(row);
 }