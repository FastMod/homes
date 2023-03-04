let i = 1;
document.onclick = function() {
    if (i==1)
    {
    document.getElementById(i).style.display = 'block';
    }
    else {
        document.getElementById(i).style.display = 'block'
        document.getElementById(i-1).style.display = 'none'
    }

    i=i+1;
  }