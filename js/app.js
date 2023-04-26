import io from 'socket.io-client';
import Echo from 'laravel-echo';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

window.io = io

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: 'http://127.0.0.1:6001',
    auth: {
        headers: {
            'User-Agent': navigator.userAgent
        }
    },
    bearerToken: '',
    namespace: null // only for used `broadcastAs` method
});

window.Echo.channel('Channel_Name').listen('ExampleEvent', (res) => {
    console.log(res);
});
