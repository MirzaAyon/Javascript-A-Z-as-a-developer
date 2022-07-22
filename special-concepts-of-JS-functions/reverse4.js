function reverseString(sentence) {

    // console.log(sentence);
    // console.log(sentence.length);

    for (var i = sentence.length - 1; i >= 0; i--) {
        //ekhane -1 karon last item ke access kortesi
        console.log(sentence[i]);
    }


}

reverseString("Hello World!")