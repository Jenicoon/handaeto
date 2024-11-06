document.getElementById('updatelog').onclick = function() {
    document.getElementById('openlog').style.display = 'block';
    document.getElementById('overlaylog').style.display = 'block';
};

document.getElementById('closelog').onclick = function() {
    document.getElementById('openlog').style.display = 'none';
    document.getElementById('overlaylog').style.display = 'none';
};


document.getElementById('overlaylog').onclick = function() {
    document.getElementById('openlog').style.display = 'none';
    document.getElementById('overlaylog').style.display = 'none';
};