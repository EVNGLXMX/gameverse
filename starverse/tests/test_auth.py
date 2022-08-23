from starlette.responses import HTMLResponse
from starlette.testclient import TestClient
import pytest

async def app(scope, receive, send):
    assert scope['type'] == 'http'
    response = HTMLResponse('<html><body>Hello, world!</body></html>')
    await response(scope, receive, send)

def test_app():
    client = TestClient(app)
    response = client.get('/')
    assert response.status_code == 200