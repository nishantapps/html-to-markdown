function convertTextEffects(html) {
    // Headers (H1-H6)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return html;
  }

module.exports = convertTextEffects;