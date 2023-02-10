// chat
var chatBodyNotes = document.querySelector('#notesChatLog')
const submitBtnNotes = document.querySelector('#notesSubmit');
const inputValueNotes = document.querySelector('#notesChatInput');

submitBtnNotes.addEventListener('click', function (e) {
    e.preventDefault();
    const dataValueNotes = inputValueNotes.value;
    console.log(dataValueNotes)
    
    $(chatBodyNotes).append(`   
     <!-- msg sender -->
    <div class="row msg_container base_sent">
        <div class="d-flex align-items-start">
            <div class="flex-grow-1 mr-3">
                <div class="messages msg_sent triangle right-top">
                    <p class="message-text">${dataValueNotes}</p>
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
                    <p class="message-text">${dataValueNotes}</p>
                        <span class="message-time">10:42 am</span>
                </div>
            </div>

        </div>
    </div>`);
    // chatBody.append(html)

    clearNotesInput();
   

});


function clearNotesInput() {
    $("#notesChatForm :input").each(function () {
        $(this).val('');
    });
}

// scroll bottom always
const msgContainerNotes = document.querySelector('#msgNotesContainer');
msgContainerNotes.scrollTop = msgContainerNotes.scrollHeight;
console.log("A"+ msgContainerNotes.scrollTop)
console.log("B"+msgContainerNotes.scrollHeight)


