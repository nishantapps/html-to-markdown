function convertCode(html) {
    html = html.replace(/```(\w+)?\n([\s\S]+?)\n```/g, '<pre><code>$2</code></pre>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    return html;
  }

module.exports = convertCode;