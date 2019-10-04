interface Message {
    message: string;
    data?: string;
}

export class Sockets {
    Socket: WebSocket;
    SocketURL: string;

    constructor() {
        this.SocketURL = 'ws://localhost:9090/websocket';
        this.Socket = new WebSocket(this.SocketURL);
    }

    sendMessage(message: Message) {
        this.Socket.send(message.toString());
    }

    
}