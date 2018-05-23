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
    if (this.lineBuffer.match("exit")) {
        this.close();
        return;
    }
    else if (this.lineBuffer.match("kant")) {
        this.write(kant, true);
        return;
    }
    else if (this.lineBuffer.match("clear")) {
        this.clear();
    }
    else if (this.lineBuffer != '') {
        this.write('You write: ' + this.lineBuffer.replace(/%/g, '%%'));
        this.newLine();
    }
    /*else if(this.lineBuffer.match(/^\s*help\s*s$/i)) {
      this.close();
      return;
    }*/
    this.prompt();
}

function test(command) {
    if ((!term) || term.closed) {
        alert('Please open the terminal first!');
    }
    TermGlobals.importEachLine(command)
}