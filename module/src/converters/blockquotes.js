function convertBlockQuotes(html) {
    html = html.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>');
    return html;
  }

module.exports = convertBlockQuotes;