const a = [1,2,2,4,5,6,3,2,2,3];

for(let i = 0; i < 10; i++) {
    for(let j = i+1; j < 10; j++) {
        if(a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log(a);
let max = 0;
let d = 0;
for(let i = 0; i < 10; i++) {
    let b = i, count = 1;
    for(let j = i+1; j < 10; j++) {
        if(a[i] == a[j]) {
            count++;
            b++;
        }
    }
    if(count > max) max = count;
    if(count == max) d = a[i];
    i = b;
    console.log(max);
}
console.log("So xuat hien nhieu nhat: " + d);
