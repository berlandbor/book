document.getElementById('testButton').addEventListener('click', function() {
    alert('Кнопка нажата!');
});

// Регистрация сервисного рабочего
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service-worker.js')
        .then(function(registration) {
            console.log('Service Worker зарегистрирован с областью:', registration.scope);
        })
        .catch(function(error) {
            console.log('Регистрация Service Worker не удалась:', error);
        });
    });
}
