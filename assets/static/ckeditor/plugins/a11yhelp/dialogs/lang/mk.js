POST /some_url HTTP/1.1
Content-Type: application/x-www-form-urlencoded

foo=bar&baz=qux


HTTP/1.1 200 OK
Content-Type: text/plain

ok


POST /login HTTP/1.1
Content-Type: application/x-www-form-urlencoded

username=testuser&password=testpass


HTTP/1.1 200 OK
Content-Type: application/json

{"status": "success", "token": "abc123"}


GET /
