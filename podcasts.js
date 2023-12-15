function changeColor(post_num, likes) {
  let index = post_num
  let new_likes = likes + 1;
  document.getElementsByClassName('change-color')[index].style.color = '#9d4ee7';
  document.getElementsByClassName('change-likes')[index].innerHTML = new_likes;
}

function carousel(up_or_down) {
  let imgURLs = [
    "https://i.postimg.cc/7ZfJC1vP/magnificent-jerk.png", 
    "https://i.postimg.cc/KvcMbSJM/how-to-keep-time.png",
    "https://i.postimg.cc/qRXNfjKw/murder-homes.png"  
  ];

  let imgNum = Number(document.getElementsByClassName("podcast-img")[0].id);
  let newImgNum = imgNum + up_or_down;
  let maxImgNum = imgURLs.length - 1;

  console.log(imgNum);

  if (up_or_down > 0) {
    if (newImgNum > maxImgNum) {
      newImgNum = 0;
    }
  }
  else {
    if (newImgNum < 0) {
      newImgNum = maxImgNum;
    }
  }

  let new_elt = document.createElement('img');
  new_elt.src = imgURLs[newImgNum];
  new_elt.className = "podcast-img";
  new_elt.id = newImgNum.toString();

  document.getElementsByClassName("podcast-img")[0].replaceWith(new_elt);
}

let popupWindow = null;
function centeredPopup(url,winName,w,h,scroll){

  LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
  TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
  settings =
  'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
  popupWindow = window.open(url,winName,settings)
}