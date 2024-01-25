//고찰 : 잘못입력됬을때의 데이터를 받지않는 코드를 추가했다면 어땠을까?

function loginUser() {
    var checkUsername = $('#checkUsername').val();
    var checkEmail = $('#checkEmail').val();
    var checkPhonenumber = $('#checkPhonenumber').val();

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // 입력된 이메일과 비밀번호를 가진 회원이 있는지 확인
    var loggedInUser = existingUsers.find(function (user) {
        return user.username === checkUsername && user.email === checkEmail && user.phonenumber === checkPhonenumber;
    });

    if (loggedInUser) {
        alert(loggedInUser.username + '님. 매달 후원금액은 ' + loggedInUser.money + '원 입니다.');
        // 로그인 성공 시 추가 작업을 수행할 수 있습니다.
    } else {
        alert('정보가 일치하지 않습니다.');
    }
    location.reload();

    $('#loginForm')[0].reset();
}
