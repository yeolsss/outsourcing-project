const checkValidation = (key, value, num) => {
  if (/^\s*$/.test(value)) {
    alert(`${key} 칸에 공백만 입력하셨습니다.`);
  } else if (value.length > num) {
    alert(`${key} 칸은 ${num}자 이내로 입력해주세요.`);
    console.log('value', value);
  }
};

export default checkValidation;
