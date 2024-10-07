//ForEach
let arr = [1,2,3,4,5];

// arr.forEach(arr => console.log(arr));
// for(ar of arr){
//     if(ar%2==0){
//         console.log(ar);
//     }    
// }

// let print = function (el){
//     console.log(el);
    
// };

// arr.forEach(print);

// arr.forEach((el) => {console.log(el);}
// )

//Multiple array

let arrs =[{
    sName: "aman",
    sMarks:95
},{
    sName: "saman",
    sMarks:80
},{
    sName: "hman",
    sMarks:90
}];

// arrs.forEach((student)=>
// {
//     console.log(student.sName);
    
// })

//Map function

// let double = arr.map((el)=> {
//     return el*2;
// })

// console.log(double);

// let gpa = arrs.map((el)=> {return el.sMarks/10;});
// console.log(gpa);

let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((el)=>{
//     return el%2==0;
// })

// let even = nums.every((el)=>{
//     return el%2==0;
// })


// let even = nums.reduce((res,el)=>{
//     return res+el;
// })

// console.log(even);

let max = nums.reduce((res,el)=>{
    if(el>res){
        return el;
    } else {
        return res;
    }
})

console.log(max);


