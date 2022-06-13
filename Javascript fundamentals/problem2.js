//তোমার কাছে বর্তমানে একটা নির্দিষ্ট বাজেট রয়েছে ফ্যামিলি ট্যুর দেয়ার জন্য। যেটা budget নামক একটা ভেরিএবলে থাকবে।  নিচের প্রবলেম গুলো পড়  এবং তোমার সিদ্ধান্ত নাও  ।


// যদি তোমার বাজেট  ৫০০০ এর বেশি হয় তাহলে তুমি ফ্যামিলি কে নিয়ে ট্যুর দিবে । অন্যথায় ৫০০০ এর কম হয় তাহলে ট্যুর না দিয়ে ঘুম দিবে।  যদি তুমি ট্যুর দিতে পারো তার মানে তোমার কাছে ৫০০০ এর বেশি টাকা আছে।  এখন ধরো হোটেল ভাড়া ৪০০০। তাহলে তুমি হিসেবে করো তাহলে হাতে আর কত টাকা এক্সট্রা আছে।  যদি ২০০০এর বেশি টাকা হাতে থাকে তাহলে তুমি বারবিকিউ পার্টি করবে , না হলে ট্যুরে গিয়ে অল্প শপিং করবে।
//  solution number 2

var budget = 6000;
var hotelCost = 4000;

if (budget > 5000) {
    console.log("yeah !!!! tour dibo,,,,");


    var remainingMoney = budget - hotelCost;
    console.log(remainingMoney);

    if (remainingMoney > 2000) {
        console.log(" barbique party hobe");
    } else {
        console.log("shopping korbo");
    }


} else {
    console.log("taka nai. tour na diye ghum dibo....");
}
