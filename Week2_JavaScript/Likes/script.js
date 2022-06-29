function addLikes(counter) {
    var updatedcounter = document.getElementById(counter).innerHTML;
    updatedcounter++;
    document.getElementById(counter).innerHTML = updatedcounter;
}