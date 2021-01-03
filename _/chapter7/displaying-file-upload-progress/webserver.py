
import string,cgi,time
import os.path
from os import curdir, sep
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
#import pri

class UploadHandler(BaseHTTPRequestHandler):

    path = 'index.html'

    def do_GET(self):

        basepath = os.path.dirname(os.path.abspath(__file__))

        if self.path == '/':
            fileobj = os.path.join(basepath, 'index.html')
            content_type = 'text/html'
        elif self.path == '/index.js':
            fileobj = os.path.join(basepath, 'index.js')
            content_type = 'application/javascript'
        else:
            self.send_response(404)
            self.end_headers()
            return

        with open(fileobj, 'r') as f:
            self.send_response(200)
            self.send_header('Content-type', content_type)
            self.end_headers()
            self.wfile.write(f.read())
            return
        
    def do_POST(self):

        content_type, params = cgi.parse_header(self.headers.getheader('content-type'))

        if content_type == 'multipart/form-data':
            cgi.parse_multipart(self.rfile, params).keys()
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write('OK')

def main():
    try:
        server = HTTPServer(('', 8000), UploadHandler)
        print 'Started upload server...'
        server.serve_forever()
    except KeyboardInterrupt:
        print 'Shutting down upload server...'
        server.socket.close()

if __name__ == '__main__':
    main()

