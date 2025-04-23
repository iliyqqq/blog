function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabName).style.display = 'block';
}

function togglePost(post) {
    const content = post.querySelector('.content');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

function sendMessage(event) {
    event.preventDefault();
    const messageText = document.getElementById('response-message');
    messageText.innerText = 'Сообщение отправлено!';
    messageText.style.display = 'block';
}
