

all_messages = []   # список всех сообщений

# функция добавления нового сообщения
def add_message(sender, text):
    new_message = {
        'text': text,
        'sender': sender,
        'time': '15:20'
    }

    all_messages.append(new_message)


# функция вывода всех сообщений
def print_all():
    for message in all_messages:
        print(f'[{message["sender"]}]: {message["text"]} / {message["time"]}')


add_message('Вася', 'Оставьте мне пивка плз')
add_message('Петя', 'Нет')

print_all()
