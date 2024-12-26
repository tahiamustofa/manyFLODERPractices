const nums =[12,10,8,15,7];

const doubled = nums.map(n=>n*2);
// console.log(doubled);
const fiveBonus = nums.map(n=>n+5);
// console.log(fiveBonus);
const haves = nums.map(n=>n/2); 
// console.log(haves);
 const friends = ['Tom','Jerry','PINK','Oggy','Ozzy'];

 const lengths = friends.map(x => x.length);
 
//  console.log(lengths);
const firstletter = friends.map(frnd=>frnd[0]);
console.log(firstletter);

// notes: তোমার প্রশ্নের কোডে `friends` নামে একটি অ্যারে রয়েছে, যেখানে কয়েকটি স্ট্রিং রাখা আছে:

// ```javascript
// const friends = ['Tom','Jerry','PINK','Oggy','Ozzy'];
// ```

// এরপর `friends.map()` ব্যবহার করে দুটি ভিন্ন ফাংশন লেখা হয়েছে:

// 1. **প্রথম ফাংশন** `x => x.length` যা প্রতিটি স্ট্রিং-এর দৈর্ঘ্য (length) বের করছে।
// 2. **দ্বিতীয় ফাংশন** `frnd => frnd[0]` যেখানে প্রতিটি বন্ধুর নামের প্রথম অক্ষর বের করা হচ্ছে।

// ### ব্যাখ্যা:
// `frnd[0]` ব্যবহার করে প্রতিটি বন্ধুর নামের প্রথম অক্ষর পাওয়া যাচ্ছে। এখানে `friends` অ্যারের প্রতিটি আইটেম একটি স্ট্রিং, আর জাভাস্ক্রিপ্টে স্ট্রিং অ্যারে-লাইক বিহেভ করে। অর্থাৎ, তুমি স্ট্রিংয়ের কোনো নির্দিষ্ট অক্ষরে ইন্ডেক্স দিয়ে অ্যাক্সেস করতে পারো, যেমন:

// - `friends[0]` মানে হচ্ছে `'Tom'`, এবং `'Tom'[0]` মানে হচ্ছে `'T'`, যেহেতু `'Tom'` একটি স্ট্রিং।
// - একইভাবে, `friends[1]` হচ্ছে `'Jerry'`, এবং `'Jerry'[0]` মানে হচ্ছে `'J'`।

// এখানে প্রতিটি বন্ধুর নামের প্রথম অক্ষর (index `0`-এর মান) `map()` ফাংশনের মাধ্যমে বের করা হচ্ছে। এই কারণেই `frnd[0]` ব্যবহার করা হয়েছে।

// ### মূল ব্যাখ্যা:
// যেহেতু প্রতিটি বন্ধুর নাম একটি স্ট্রিং, এবং স্ট্রিংয়ের প্রতিটি অক্ষর ইন্ডেক্স দিয়ে অ্যাক্সেস করা যায়, তাই `frnd[0]` ব্যবহার করে প্রথম অক্ষর বের করা হচ্ছে। এখানে কোনো অ্যারেতে কনভার্ট করা হয়নি, বরং স্ট্রিং-এর ইন্ডেক্সিং এর সুবিধা ব্যবহার করা হয়েছে।

// #### উদাহরণ:
// ```javascript
// ['T', 'J', 'P', 'O', 'O']
// ```

// ### সংক্ষেপে:
// **`frnd[0]`** মানে বন্ধুর নামের প্রথম অক্ষরটি অ্যাক্সেস করছে, যেহেতু স্ট্রিং-কে ইন্ডেক্স দিয়ে ভাঙা যায়।

