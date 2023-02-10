/*const eventHandler = document.getElementById('event-handler');
const handlerStatus = document.getElementById('handler-status');

eventHandler.addEventListener('click', function handleOnClick(){
    handlerStatus.innerText = 'Status Changed'
})

const updateBtn = document.getElementById('update-btn');

updateBtn.addEventListener('click', function textUpdate(){

    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const changeText = document.getElementById('def-text')

    changeText.innerText = inputText;
    inputField.value = '';

})*/

const commentBtn = document.getElementById('comment-btn');

commentBtn.addEventListener('click', function (){

    const newComment = document.getElementById('new-comment');
    const commentText = newComment.value;

    const postComment = document.getElementById('comment-box');
    const p = document.createElement('p')
    p.innerText = commentText;
    postComment.appendChild(p);
    newComment.value = '';

})