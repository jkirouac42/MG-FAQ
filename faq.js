function addEventListener(){
    document.getElementById('oct').addEventListener("click", hide1, false);
}

function hide1(){
    console.log('works');
    document.getElementById('s3d').display = "none";
    document.getElementById('maint').display = "none";
}