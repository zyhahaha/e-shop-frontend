var shareEl = document.getElementsByClassName('share')[0]
function openShare(){
    if (!shareEl) return false;
    shareEl.style.top = '0rem'
}
function closeShare(){
    if (!shareEl) return false;
    shareEl.style.top = '100vh'
}
