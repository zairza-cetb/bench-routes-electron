'use strict'

import {ipcRenderer, remote} from 'electron';

export default class BenchRoutesUI {
    socket: WebSocket;
    $btn1: HTMLElement;
    $btn2: HTMLElement;
    newvar: any
    
    constructor() {
        this.newvar = "Muskan";
        this.$btn1 = document.querySelector('#btn1');
        this.$btn2 = document.querySelector('#btn2');
    }

    init(): void {

        console.log(this.newvar)
        this.$btn1.addEventListener('click', () => {
            ipcRenderer.send('show-dialog', {
            type: 'info'
          });
       });

       this.$btn2.addEventListener('click', () => {
            remote.dialog.showMessageBox(remote.getCurrentWindow(), {
            type: 'info',
            buttons: [],
            message: 'Hello, how are you?'
          });
        });
    }

}

// module.exports = BenchRoutesUI();