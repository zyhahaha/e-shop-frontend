var _shareCtrl = (function() {
    var shareEl = document.getElementsByClassName('share')[0]
    shareEl.addEventListener('click', function() {
        closeShare()
    })
    function openShare(){
        if (!shareEl) return false;
        shareEl.style.top = '0rem'
    }
    function closeShare(){
        if (!shareEl) return false;
        shareEl.style.top = '100vh'
    }
    return {
        openShare,
        closeShare
    }
})()
