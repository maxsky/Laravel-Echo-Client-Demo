import Echo from 'laravel-echo';

import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echoServer = new Echo({
    broadcaster: 'reverb',
    key: 'REVERB_APP_KEY', // import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: 'localhost', // import.meta.env.VITE_REVERB_HOST,
    wsPort: 8080, // import.meta.env.VITE_REVERB_PORT,
    wssPort: 8080, // import.meta.env.VITE_REVERB_PORT,
    forceTLS: false, // (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

// EVENT_NAME same as event class name without `broadcastAs` method
echoServer.listen('CHANNEL_NAME', 'EVENT_NAME', (res) => {
    const currentTime = new Date().toLocaleString();

    const jsonCode = document.querySelector('#jsonCode');
    jsonCode.textContent += '// ' + currentTime + ' Received:\n' + JSON.stringify(res, null, 2) + '\n\n';

    Prism.highlightElement(jsonCode);
});

// if event class defined a name through `broadcastAs` method, then EVENT_NAME need add `.` prefix
// echoServer.listen('CHANNEL_NAME', '.EVENT_NAME', (res) => {
//     console.log(res);
// });
