const getTheTitles = function(bookArr) {
  const titleArr = [];
  for (let i = 0; i < bookArr.length; i++){
    titleArr.push(bookArr[i].title);
  }
  return titleArr

};

// Do not edit below this line
module.exports = getTheTitles;
