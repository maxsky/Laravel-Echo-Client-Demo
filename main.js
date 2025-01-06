import 'prismjs';
import 'prismjs/themes/prism.min.css';
import 'prismjs/components/prism-json.min.js';
import './js/app.js'

document.querySelector('#app').innerHTML = `
  <div><h1>Laravel-Echo-Client</h1></div>
  <div class="json-container" style="width: 1024px">
    <pre><code class="language-json" id="jsonCode"></code></pre>
  </div>
`
