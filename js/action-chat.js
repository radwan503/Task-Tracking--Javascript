// chat
var chatBodyAction = document.querySelector('#chatLogAction')
const submitBtnAction = document.querySelector('#submitAction');
const actionInputValue = document.querySelector('#actionChatInput');

submitBtnAction.addEventListener('click', function (e) {
    e.preventDefault();
    const dataValueAction = actionInputValue.value;
    console.log(actionInputValue)

    $(chatBodyAction).append(`   
     <!-- msg sender -->
    <div class="row msg_container base_sent">
        <div class="d-flex align-items-start">
            <div class="flex-grow-1 mr-3">
                <div class="messages msg_sent triangle right-top">
                    <p class="message-text">${dataValueAction}</p>
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
                    <p class="message-text">${dataValueAction}</p>
                        <span class="message-time">10:42 am</span>
                </div>
            </div>

        </div>
    </div>`);
    //chatBody.append(html)

    clearActionInput();
    $("#msgContainerAction").stop().animate({ scrollTop: $("#msgContainerAction")[0].scrollHeight }, 1000);

});


function clearActionInput() {
    $("#actionChatForm :input").each(function () {
        $(this).val('');
    });
}

// scroll bottom always
const msgContainerScroll = document.querySelector('#msgContainerAction');
msgContainerScroll.scrollTop = msgContainerScroll.scrollHeight;
console.log("Top"+ msgContainerScroll.scrollTop)
console.log("Height"+msgContainerScroll.scrollHeight)


