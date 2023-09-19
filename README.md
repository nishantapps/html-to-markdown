
# HTML Converter Module

The HTML Converter Module is a JavaScript module that provides functions for converting Markdown-formatted text into HTML. It includes individual converters for different Markdown elements and a simple server to preview the converted HTML.

## Installation

To use this module in your JavaScript project, you can follow these steps:

1. Install the module using npm:

```bash
npm install @nishantapps/html-converter-module
```

2. Import the module in your JavaScript file:

```javascript
const converterModule = require('@nishantapps/html-converter-module');
```

## Usage

### Convert Markdown to HTML

You can use the `convert` function to convert Markdown to HTML. It internally utilizes individual converters for various Markdown elements.

```javascript
const markdownText = `Your Markdown content here`;
const htmlResult = converterModule(markdownText);
```

The `htmlResult` variable will contain the HTML equivalent of your Markdown text.

### Supported Markdown Elements

The module includes individual converters for the following Markdown elements:

- Blockquotes
- Code blocks
- Headers
- Links
- Lists
- Paragraphs
- Text Effects (Bold, Italics, etc.)

You can use these converters individually if needed. For example:

```javascript
const blockquote = require('@nishantapps/html-converter-module/converters/blockquotes');
const code = require('@nishantapps/html-converter-module/converters/code');
// ... other converters

let html = 'Your Markdown content here';
html = blockquote(html);
html = code(html);
// ... other converters
```

### Preview HTML with a Server

The module also provides a simple server function to preview the converted HTML content. You can use it as follows:

```javascript
const converterModule = require('html-converter-module');

// Convert Markdown to HTML
const markdownText = `Your Markdown content here`;
const htmlResult = converterModule(markdownText);

// Start the server to preview the HTML
converterModule.server(3000); // Listen on port 3000
```

## Example

Here's a basic example of using the module to convert Markdown to HTML and preview it using the server:

```javascript
const converterModule = require('html-converter-module');

// Convert Markdown to HTML
const markdownText = `# Example Heading\nThis is **bold** text.`;
const htmlResult = converterModule.convert(markdownText);

// Start the server to preview the HTML
converterModule.server(3000); // Listen on port 3000
```

## License

This HTML Converter Module is provided under the MIT License. Feel free to use and modify it in your projects.
