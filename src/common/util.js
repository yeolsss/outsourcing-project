export const checkValidation = (key, value, num) => {
  if (/^\s*$/.test(value)) {
    alert(`${key} 칸에 공백만 입력하셨습니다.`);
    return false;
  } else if (value.length > num) {
    alert(`${key} 칸은 ${num}자 이내로 입력해주세요.`);
    return false;
  } else {
    return true;
  }
};

export const getDate = (setDate = '') => {
  const today = setDate === '' ? new Date() : new Date(setDate);

  const year = String(today.getFullYear()); // 년도
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월
  const date = String(today.getDate()).padStart(2, '0'); // 날짜
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  return `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`;
};