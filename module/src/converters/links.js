function convertLinks(html) {
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    return html;
  }

module.exports = convertLinks;