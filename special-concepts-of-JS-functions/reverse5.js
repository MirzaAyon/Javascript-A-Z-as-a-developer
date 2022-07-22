function reverseString(sentence) {

    // console.log(sentence);
    // console.log(sentence.length);
    var reward = "";
    for (var i = sentence.length - 1; i >= 0; i--) {
        //ekhane -1 karon last item ke access kortesi
        reward = reward + sentence[i];
        //           "" + "!" = "!"
        //         "!"+"d" ="!d"  
    }
    console.log(reward); //eta mane reword


}

reverseString("Hello World!")