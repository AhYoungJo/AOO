 $(document).ready(function () {
     $("#dropAnswer").click(function () {
         $(this).next("li.answer").toggle("");
          $(this).switch('<span class="material-symbols-outlined" id="dropAnswer"> arrow_down <span>');
     });
 });

ID는 하나만 인식하기 때문에 중복으로는 쓰일 수 없다.
그리고 ID는 class보다 더 높기(?)때문에 ID는 웬만하면 지양, 나중에 수정단계에서 사용하는 것이 보통이다.

$(document).ready(function () {
    $("span").click(function () {
        $(this).next("li.answer").toggle("");
    });
});
