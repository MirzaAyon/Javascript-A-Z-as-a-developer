var sentence = 'hello everyone. hello developers.';
// space er age space thaka jabe na
function wordCount(sentenceCollection) {
    var count = 0;

    for (var i = 0; i < sentenceCollection.length; i++) {
        // console.log(sentenceCollection[i]);
        if (sentenceCollection[i] == " ") {
            count = count + 1
            // count = 0 + 1 = 1
            // count = 1+1 = 2
        }
    }
    console.log(count);
}
wordCount(sentence)