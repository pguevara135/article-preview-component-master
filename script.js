document.getElementById('button').addEventListener('click', function() {
    document.getElementById("share").style.display = 'flex';
    document.getElementById('buttonClose').style.display = 'inline-block';
    document.getElementById('button').style.display = 'none'
});

function init(){
    document.getElementById('share').style.display = 'none';
    document.getElementById('button').style.display = 'inline-block';
    document.getElementById('buttonClose').style.display = 'none';
};

document.getElementById('buttonClose').addEventListener('click', init);
document.getElementById('buttonCloseOne').addEventListener('click', init)