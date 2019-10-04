import { ipcRenderer, remote } from 'electron';
import { Routes } from './routes';

export default class BenchRoutesUI {
    socket: WebSocket;
    router: Routes;
    currentMainTemplate: HTMLElement;
    navigator: HTMLObjectElement;

    constructor() {
        this.currentMainTemplate = document.getElementById('main-component');
        this.navigator = document.createElement('object');
        this.currentMainTemplate.appendChild(this.navigator);
        this.router = new Routes();
        this.configInit();
    }

    configInit() {
        // load home page
        this.navigator.data = this.router.routes[0].path;
    }
}

var instance = new BenchRoutesUI();
