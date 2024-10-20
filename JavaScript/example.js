var arr = [5,2,3,4,1,2,9];
var largest = arr[0];

for(var i=1;i<arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);