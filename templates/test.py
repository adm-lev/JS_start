
def change_str(string, char='*'):
    import re

    pattern = r'\s'
    return re.sub(pattern, char, string)


di = {
    1: 22,
    2: 33,
}

print(di.get(1))

