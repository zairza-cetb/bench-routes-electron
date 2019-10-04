interface Routing {
    url: string;
    path: string
}

export class Routes {
    routes: Routing[];

    constructor() {
        this.routes = [
            {
                url: '/home',
                path: 'home.html'
            },
            {
                url: '/dashboard',
                path: 'home.html'
            }
        ];
    }
}

