class Chatbox {
    constructor() {
        this.args = {
            chatBox: document.querySelector('.whole_chatbot'),
            sendButton: document.querySelector('.send_button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {chatBox, sendButton} = this.args;

        const paste = chatBox.querySelector('.textarea');
        paste.addEventListener("paste", function(e){
            e.preventDefault();
            var text = e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text)
           
        });

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('.textarea');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
                
            }
        })
        
    }

    onSendButton(chatbox) {
        var textField = chatbox.children[2].children[0].children[0].firstChild;
        let text1 = textField.data
        if (typeof(text1)=="undefined"){
            var span = chatbox.children[2].children[0].children[0]
        
            if (span.children.length > 0) {
            const child = span.children[0].innerHTML;
            span.innerHTML=child
        }
            return; 
        }

        if (text1.trim().length === 0 ){
            console.log("user input ok");
            var span = chatbox.children[2].children[0].children[0]
        
            if (span.children.length > 0) {
            const child = span.children[0].innerHTML;
            span.innerHTML=child
        }
            return;
        }

        var span = chatbox.children[2].children[0].children[0]
        
        if (span.children.length > 0) {
            const child = span.children[0].innerHTML;
            span.innerHTML=child
        }


        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 , bot:"Joyce"}),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            let msg2 = { name: "Sam", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.data = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.data = ''
          });
    }


    async updateChatText(chatbox) {
        const delay = (s) => {
            return new Promise(function(resolve){  
              setTimeout(resolve,s);               
            });
        };
        const chatmessage = chatbox.querySelector('.chatbot_content');
        var html = '<div class="message"> <img src="woman.png" alt="icon" class="icon"> <div class="messages__item messages__item--visitor">Hi! It\'s Joyce! Long time no see! How\'s you going?</div> </div>';
        const allMessage = this.messages.slice()
        for (let message = 0;message< allMessage.length;message++){
            if (allMessage[message].name === "Sam")
            {   
                if (message===allMessage.length-1)
                {
                    await delay(2500);
                    html = html.slice(0,-176)
                    html += '<div class="messageAnimate">  <img src="woman.png" alt="icon" class="icon"> <div class="messages__item messages__item--visitorAnimate">' + allMessage[message].message + '</div></div>  </div>'
                }
                else
                {
                    html = html.slice(0,-176)
                    html += '<div class="message">  <img src="woman.png" alt="icon" class="icon"> <div class="messages__item messages__item--visitor">' + allMessage[message].message + '</div></div>  </div>'
                }
                
                chatmessage.innerHTML = html;  
                chatmessage.scrollTop=chatmessage.scrollHeight;
            }
            else
            {   
                if (message===allMessage.length-2)
                {
                    html += '<div class="mymessageAnimate"><div class="messages__item messages__item--operator">' + allMessage[message].message + '</div></div></div>'
                    chatmessage.innerHTML = html;
                    chatmessage.scrollTop=chatmessage.scrollHeight;
                    var messagelen= allMessage[message].message.length+101
                    html = html.slice(0,-messagelen)
                    html += '<div class="message">  <div class="messages__item messages__item--operator">' + allMessage[message].message + '</div></div></div>'
                    html += '<div class="threedots"><img src="woman.png" alt="icon" class="icon"><div class="tiblock"><div class="tidot"></div><div class="tidot"></div><div class="tidot"></div></div></div>'
                    await delay(2000);
                    chatmessage.innerHTML = html;  
                    chatmessage.scrollTop=chatmessage.scrollHeight;
                }
                else
                {
                html += '<div class="message">  <div class="messages__item messages__item--operator">' + allMessage[message].message + '</div> </div></div>'
                html += '<div class="threedots"><img src="woman.png" alt="icon" class="icon"><div class="tiblock"><div class="tidot"></div><div class="tidot"></div><div class="tidot"></div></div></div>'
                chatmessage.innerHTML = html;  
                chatmessage.scrollTop=chatmessage.scrollHeight;
                }
            }
        }
    }
}
const chatbox = new Chatbox();
chatbox.display();