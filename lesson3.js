'use strict';
let i = 2;
const nums = [];
while (i < 100) {
    const root = Math.round(Math.sqrt(i));
    let simple = true;
    let j = 2;
    if (i > 3){
        while(j <= root) {
            if (i % j === 0)
                simple = false;
            j++;
        }
    }
    if (simple === true || i === 2 || i === 3)
        nums.push(i);
    i++;
    
    
}

alert(nums);

const nums2 = [];

for (i = 0; i < 10; nums2.push(i), i++){}

alert(nums2)