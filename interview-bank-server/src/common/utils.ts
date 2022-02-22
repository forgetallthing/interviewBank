//获取随机数
export const getRandomID = function (len = 16) {
  let rdmString =
    String.fromCharCode(97 + Math.ceil(Math.random() * 25)) +
    new Date().getTime().toString(36);
  for (
    ;
    rdmString.length < len;
    rdmString += Math.random().toString(36).substr(2)
  );
  return rdmString.substr(0, len);
};
