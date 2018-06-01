var NumberOfWords = 13;

var words = new buildArray(NumberOfWords);

words[1] = "elephant";
words[2] = "independent";
words[3] = "banana";
words[4] = "protector";
words[6] = "truecoders";
words[7] = "random";
words[8] = "david";
words[9] = "brandon";
words[10] = "code";
words[11] = "javascript";
words[12] = "chip";
words[13] = "figure";

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