import os
import json
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def main(request):
    message = Mail(
        from_email='baezagaston@gmail.com',
        to_emails='gaston.baeza@mightyhive.com',
        subject='Sending with Twilio SendGrid is Fun',
        html_content='<strong>and easy to do anywhere, even with Pythonqqqqqq</strong>')
    try:
        #sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        sg = SendGridAPIClient('api-key')
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e)