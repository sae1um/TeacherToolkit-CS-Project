from faker import Faker
import random
import string
import json

fake = Faker()

def generate_password(length = 10):
    characters = string.ascii_letters + string.digits + string.punctuation
    return "".join(random.choice(characters) for i in range(length))

users = []

for _ in range(50):
    user = {
        "firstname": fake.first_name(),
        "lastname": fake.last_name(),
        "email": fake.email(),
        "password": generate_password(),
        "role": "teacher",
        "verificationCode": "JQwmLDp35c"
    }
    users.append(user)

with open("users.json", "w") as json_file:
    json.dump(users, json_file, indent=4)

print("User data written to 'users.json'")