let user = {
    email: "example@mail.com",
    password: "12345",
    sum: 5
  };
  
  let enteredEmail = prompt("Введите вашу почту:");
  if (enteredEmail !== user.email) {
    alert("Извините, такой почты не существует.");
  } else {
    let enteredPassword = prompt("Введите ваш пароль:");
    if (enteredPassword !== user.password) {
      alert("Пароль неверен.");
    } else {
      let answer = prompt("2 + 3 = ?");
      if (parseInt(answer) === user.sum) {
        user.premium = user.sum;
        alert("Верно! Ваш премиум = ${user.sum}");
      } else {
        alert("Вы дали неправильный ответ.");
      }
    }
  }
