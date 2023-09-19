function convertLists(html) {
    html = html.replace(/^\* (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/^\d+\. (.*?)$/gm, '<li>$1</li>');
    return html;
  }

module.exports = convertLists;