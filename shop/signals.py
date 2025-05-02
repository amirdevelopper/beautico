from django.db.models.signals import post_save, post_delete, pre_delete, pre_save
from django.dispatch import receiver
from .models import User
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

@receiver(post_save, sender=User)
def sned_email_wellcome(sender, instance, created, **kwargs):
    if created:
        sender_email = "amircheshmenooshi@gmail.com"
        sender_password = "mpmy zplh gpme myez"
        receiver_email = instance.email

        subject = "خوش آمد گویی"
        body = f"{instance.email} به بیوتیکو خوش آمدید\n"

        msg = MIMEMultipart()
        msg["From"] = sender_email
        msg["To"] = receiver_email
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        try:
            server = smtplib.SMTP("smtp.gmail.com", 587)
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
            server.quit()
        except Exception as e:
            print("nashod!")

