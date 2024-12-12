import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from http.server import BaseHTTPRequestHandler, HTTPServer
import cgi

# Налаштування SMTP сервера
SMTP_SERVER = "smtp.example.com"  # Ваш SMTP-сервер
SMTP_PORT = 587
SMTP_USERNAME = "your_email@example.com"  # Ваш емейл
SMTP_PASSWORD = "your_password"  # Ваш пароль

class EmailHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/send-email':
            # Отримуємо дані з форми
            ctype, pdict = cgi.parse_header(self.headers['content-type'])
            if ctype == 'multipart/form-data':
                fields = cgi.parse_multipart(self.rfile, pdict)
                email = fields.get('email')[0]
                message = fields.get('message')[0]

                # Відправляємо емейл
                self.send_email(email, message)

                # Відповідь для клієнта
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b"Email sent successfully!")
    
    def send_email(self, recipient_email, message_body):
        # Створюємо повідомлення
        msg = MIMEMultipart()
        msg['From'] = SMTP_USERNAME
        msg['To'] = recipient_email
        msg['Subject'] = 'Нове повідомлення'

        msg.attach(MIMEText(message_body, 'plain'))

        # Відправка через SMTP-сервер
        try:
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            text = msg.as_string()
            server.sendmail(SMTP_USERNAME, recipient_email, text)
            server.quit()
            print(f"Email sent to {recipient_email}")
        except Exception as e:
            print(f"Error sending email: {e}")

# Запуск сервера
def run(server_class=HTTPServer, handler_class=EmailHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()