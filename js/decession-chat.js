// chat
var chatBodyDecession = document.querySelector('#chatLogDecession')
const submitBtnDecession = document.querySelector('#submitDecession');
const inputValueDecession = document.querySelector('#decessionChatInput');

submitBtnDecession.addEventListener('click', function (e) {
    e.preventDefault();
    const dataValueDecession = inputValueDecession.value;
    console.log(dataValueDecession)
    
    $(chatBodyDecession).append(`   
     <!-- msg sender -->
    <div class="row msg_container base_sent">
        <div class="d-flex align-items-start">
            <div class="flex-grow-1 mr-3">
                <div class="messages msg_sent triangle right-top">
                    <p class="message-text">${dataValueDecession}</p>
                        <span class="message-time">10:42 am <figure class="sender-check"><img class="reciver-icon" src="./img/icon/visit-check.svg" alt="sender"></figure></span>
                </div>
            </div>
        </div>
    </div>

    <!-- msg receiver -->
    <div class="row msg_container base_receive ">
        <div class="d-flex align-items-start">
            <figure class="user-profile">
                <img src="./img/user1.png"
                    class="rounded-circle mr-1" alt="Vanessa Tucker">
            </figure>
            <div class="flex-grow-1 ml-3">
                <div class="messages msg_receive triangle left-top">
                    <h1 class="user-name">Gerg Davies</h1>
                    <p class="message-text">${dataValueDecession}</p>
                        <span class="message-time">10:42 am</span>
                </div>
            </div>

        </div>
    </div>`);
    // chatBody.append(html)

    clearDecessionInput();
    $("#msgDecessionContainer").stop().animate({ scrollTop: $("#msgDecessionContainer")[0].scrollHeight }, 1000);

});


function clearDecessionInput() {
    $("#myForm :input").each(function () {
        $(this).val(''); //hide form values
    });
}

// scroll bottom always
const msgContainer = document.querySelector('#msgDecessionContainer');
msgContainer.scrollTop = msgContainer.scrollHeight;
console.log("A"+ msgContainer.scrollTop)
console.log("B"+msgContainer.scrollHeight)


