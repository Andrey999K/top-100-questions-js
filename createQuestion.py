import json

# Открываем JSON файл
with open('src/data/questions.json', 'r', encoding='utf-8') as file:
  data = json.load(file)

question = {
  "id": data[-1]["id"] + 1,
  "text": "",
  "answers": []
}

question["text"] = input("Введите текст вопроса: ")
index = 1
while True:
  str = input("Введите текст ответа: ")
  if (str != "q"):
    question["answers"].append({ "id": index, "text": str })
    index += 1
  else:
    break

question["rightAnswer"] = int(input("Введите номер правильного ответа: "))

print(question)
data.append(question)

# Парсим данные
for item in data:
  print(item)
  for answer in item["answers"]:
    print(answer)
    print("\n")
  print("\n\n")

with open('src/data/questions.json', 'w', encoding='utf-8') as file:
  json.dump(data, file, ensure_ascii=False, indent=2)
