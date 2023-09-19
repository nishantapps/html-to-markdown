function convertParagraph(html) {
    html = html.replace(/^(?!<[h|\/h|p|\/p|ul|\/ul|ol|\/ol|li|\/li|a|\/a|blockquote|\/blockquote|pre|\/pre|table|\/table])((?:.+\n)+.+)/gm, '<p>$1</p>');
    return html;
  }

module.exports = convertParagraph;