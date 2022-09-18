const toggleNotificatonBtnEl = document.getElementById("toggle-mark");
const circlesEl = document.querySelectorAll(".red-circle");
const notifCountEl = document.getElementById("notif-count");
const readNotif = document.getElementById("read-notif");
const users = document.querySelectorAll(".user");

toggleNotificatonBtnEl.addEventListener("click", toggleNotifications);

function toggleNotifications() {
  circlesEl.forEach((circle) => {
    if (!circle.classList.contains("red-circle")) {
      notifCountEl.textContent = 3;
      readNotif.textContent = "Mark as unread";
    } else {
      notifCountEl.textContent = 0;
      readNotif.textContent = "Mark all as read";
    }
    circle.classList.toggle("red-circle");
  });
}

users.forEach((user) => {
  user.addEventListener("click", () => {
    if (user.classList.contains("hide-skew")) {
      user.classList.remove("hide-skew");
      user.classList.add("show-skew");
    } else {
      user.classList.add("hide-skew");
      user.classList.remove("show-skew");
    }
  });
});
