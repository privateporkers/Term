var NumberOfWords = 5;

var words = new buildArray(NumberOfWords);

words[1] = "hello";
words[2] = "independent";
words[3] = "banana";
words[4] = "protector";
words[5] = "random";

function buildArray(size) {
    this.length = size;
    for (var i = 1; i <= size; i++) {
        this[i] = null;
    }
    return this;
}

function pickRandomWord() {
    var rnd = Math.ceil(Math.random() * NumberOfWords);
    return words[rnd];
}