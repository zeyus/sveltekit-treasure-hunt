

/**
 * Redirect to a new page, forces reload for static svelte apps
 * @param $path - the path to redirect to
 * @example
 * go2('/newpage')
 * @example
 * go2('/newpage?param1=1&param2=2')
 * 
 * @returns void
 * 
 **/
function go2($path: string) {
    // if path doesn't start with aslash, add it
    if ($path[0] !== '/') {
        $path = '/' + $path;
    }

    // if the port is not in the path and window.location.port is not empty, add it
    let host = window.location.host;
    let port = '';
    if (!host.includes(':') && window.location.port !== '') {
        port = ':' + window.location.port;
    }
    let dest = window.location.protocol + '//' + host + port + $path;
    console.log('go2: ' + dest);
    window.location.href = dest;
}

export default go2
