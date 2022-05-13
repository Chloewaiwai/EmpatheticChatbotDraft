# EmpatheticChatbotDraft

**This is the frist draft of my chatbot**

_Chatbot-backend_ : 
- currently refering to https://youtube.com/playlist?list=PLqnslRFeH2UrFW4AUgn-eY37qOAWQpJyg 
- have modified some of the codes

_Chatbot-frontend_ :
- all designed and done by myself
- should allow dark mode in chat message page in the future

## Dependencies
### Required
 - numpy (1.20.3)
 - torch (1.11.0)
 - nltk (3.6.5)
 - flask (1.1.2)
 - flask-cors (3.0.10)
 
### Install nltk package
```
$ python
>>> import nltk
>>> nltk.download('punkt')
```
## Implemantation
Run the following: 
```
$ python train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.
```
$ python chat.py
```
A chatbot will then display in the console.
If want to try the chatbot on website, run the following command to run server
```
$  python app.py
```
It will start running the backend in the localhost
Then open _index.html_ in _chatbot-frontend_ to run the web chatbot
