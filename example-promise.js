// function getTempCallback (location,callback){
//   callback(undefined,78);
//   callback('City not found');
// }
//
// getTempCallback('Atlanta', function(err,tmp){
//   if(err){
//     console.log('error',err);
//   } else {
//     console.log('success',tmp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not Found');
//     },1000);
//
//   });
// }
//
// getTempPromise('Atlanta').then(function(temp){
//   console.log('promise succes',temp);
// },
//   function(err){
//     console.log('promise error',err);
//   });

function addPromise (a,b) {
  return new Promise(function(resolve,reject){
    if(typeof a=== 'number' && typeof b=== 'number')
    resolve(a+b);
    else {
      reject('a and b need to be numbers');
    }
  });
}

addPromise(2,3).then(function(sum){
  console.log('a+b',sum);
},function(err){
  console.log('error',err);
});

addPromise('mohit',3).then(function(sum){
  console.log('a+b',sum);
},function(err){
  console.log('error',err);
});
