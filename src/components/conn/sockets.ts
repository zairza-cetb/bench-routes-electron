import Websocket from 'websocket';

class WebSockets {
    private socketConn: WebSocket;
    private urlSocketConn: string;

    constructor() {
        this.urlSocketConn = 'ws://localhost:9090/websocket';
        this.socketConn = new WebSocket(this.urlSocketConn);
        this.socketConn.onopen = () => {
            this.socketConn.send('hi from br-e');
        };
    }
}

export let SocketConnection = new WebSockets();
