var term;
function termOpen() {
    if ((!term) || (term.closed)) {
        term = new Terminal({
            handler: termHandler,
            x: 100,
            y: 100,
            cols: 200,
            rows: 50,
            crsrBlinkMode: true,
            blinkDelay: 500,
            bgColor: 'green',
            frameColor: '#77dd11',
            textColor: '#77dd11'
        });

        term.open();

        var mainPane = (document.getElementById) ?
            document.getElementById('mainPane') : document.all.mainPane;
        if (mainPane) mainPane.className = 'lh15 dimmed';

    }
}

function termExitHandler() {
    var mainPane = (document.getElementById) ?
        document.getElementById('mainPane') : document.all.mainPane;
    if (mainPane) mainePane.className = 'lh15';
}

function termHandler() {
    this.newLine();
    var ctrl = this.lineBuffer;

    if (ctrl == 'exit') {
        this.close();
        return;
    }
    else if (ctrl == 'color') {
        this.setTextColor('black');
    }
    else if (ctrl == 'bgcolor') {
        this.bgColor = 'black';
        for (var r = 0, l = this.conf.rows; r < l; r++) {
            this.redraw(r);
        }
    }
    else if (ctrl == 'clear') {
        this.clear();
    }
    else if (ctrl == 'help') {
        this.write("");
    }
    else if (ctrl != '') {
        this.write('You write: ' + this.lineBuffer.replace(/%/g, '%%'));
        this.newLine();
    }

    this.prompt();
}

function test(command) {
    if ((!term) || term.closed) {
        alert('Please open the terminal first!');
    }
    TermGlobals.importEachLine(command)
}
