const blockquote = require('./converters/blockquotes');
const code = require('./converters/code');
const headers = require('./converters/headers');
const links = require('./converters/links');
const lists = require('./converters/lists');
const paragraph = require('./converters/paragraph');
const texteffects = require('./converters/texteffects');
let preview;
function convert(html){
    html = blockquote(html);
    html = code(html);
    html = headers(html);
    html = links(html);
    html = lists(html);
    html = paragraph(html);
    html = texteffects(html);
    preview = html;
    return html;
}
function server(){
    const express = require('express');
    const app = express();
    const port = 3000;
    app.get('/', (req, res) => res.send(preview));
    app.listen(port, () => console.log(`Example app listening on http://127.0.0.1:${port}!`));
}

module.exports = {
    convert,
    server
}