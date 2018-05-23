var term;
function termOpen() {
    if ((!term) || (term.closed)) {
        term = new Terminal({
            handler: termHandler,
            x: 100,
            y: 100,
            cols: 80,
            rows: 24
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