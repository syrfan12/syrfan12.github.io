import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(fileURLToPath(new URL('../', import.meta.url)));
const port = Number(process.env.PORT || 4173);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

function respond(response, status, text) {
  response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end(text);
}

const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.setHeader('Allow', 'GET, HEAD');
    return respond(response, 405, 'Method not allowed');
  }
  try {
    const requestedPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const filename = requestedPath === '/' ? 'index.html' : requestedPath.slice(1);
    const publicFiles = ['index.html', 'styles.css', 'app.js', '.nojekyll'];
    if ((!publicFiles.includes(filename) && !filename.startsWith('assets/')) || filename.includes('\0') || filename.includes('\\') || filename.split('/').includes('..')) {
      return respond(response, 404, 'Not found');
    }
    const absolutePath = await realpath(path.resolve(root, filename));
    const relativePath = path.relative(root, absolutePath);
    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
      return respond(response, 404, 'Not found');
    }
    if (!(await stat(absolutePath)).isFile()) {
      return respond(response, 404, 'Not found');
    }
    const content = await readFile(absolutePath);
    response.writeHead(200, {
      'Content-Type': types[path.extname(absolutePath).toLowerCase()] || 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    if (error instanceof URIError) return respond(response, 400, 'Invalid URL');
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return respond(response, 404, 'Not found');
    console.error(error.message);
    respond(response, 500, 'Unable to load the file');
  }
});

server.on('error', error => {
  console.error(`Unable to start preview: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio preview: http://127.0.0.1:${port}`);
  console.log('Press Ctrl+C to stop.');
});
