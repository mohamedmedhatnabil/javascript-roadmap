const showMessage = (callback) =>
    console.log(callback);
const firstMessage = (callback) => {
    setTimeout(() => {
    console.log('Hello');
    callback();
    }, 1000)
};
const secondMessage = () => {
    showMessage('World!')
};
firstMessage(secondMessage);