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
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```
## Implemantation
```
$ (venv) python train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.
```
$ (venv) python chat.py
```
It will start running in the localhost
the following to run the web chatbot
```
$ (venv) python index.html
```
