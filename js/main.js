//toggle btn
  var checkbox = $('.switch-toggle').siblings('input[type=checkbox]')[0];
  var toggle = $('.switch-toggle');
  toggle.addClass('off');
  toggle.removeClass('on');
  toggle.text(toggle.attr('data-off'));

  $('.switch-toggle').click(function(){
      var checkbox = $(this).siblings('input[type=checkbox]')[0];
      var toggle = $(this);
      console.log("click")
      
      if (checkbox.checked) {
          toggle.addClass('off');
          toggle.removeClass('on');
          toggle.text(toggle.attr('data-off'));
      } else {
          toggle.addClass('on');
          toggle.removeClass('off');
          toggle.text(toggle.attr('data-on'));
      };
  });



// action chat show and hide
const actionList =  document.querySelector('.action-list')
const actionItem = document.querySelectorAll('.action-single-item');
const projectFilterBtn = document.querySelector('.btn-project-filter');
const projectCreateBtn = document.querySelector('.btn-project-create');
const filterActionList = document.querySelector('.filter-action-list');
//console.log("Length action list "+ actionList.children.length);
actionItem.forEach((currentClickCard)=>{
    const messageBtn = currentClickCard.querySelector('.message-btn');
    messageBtn.addEventListener('click',function(){
       actionItem.forEach((chat)=>{
           if(chat !== currentClickCard){
               chat.classList.remove('show-chat')
           }
       });
       currentClickCard.classList.toggle('show-chat');
       projectFilterBtn.classList.toggle('hide-chat');
       projectCreateBtn.classList.toggle('hide-chat');
       filterActionList.classList.toggle('hide-chat');
       //currentClickCard.previousElementSibling.classList.add('hide');
       //currentClickCard.nextAll();
       //console.log(currentClickCard.parentElement.children)
       //console.log("Length action list "+ actionList.children.length);
       const allSiblings = Array.from(currentClickCard.parentElement.children)
                         .filter(sibling => sibling !== currentClickCard);
        allSiblings.forEach(sibling => {
            console.log(sibling);
            sibling.classList.toggle('hide-chat')
        });
    });
});

















