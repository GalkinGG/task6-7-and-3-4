let last_checked = null;

const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox_elem) => {
  checkbox_elem.addEventListener("change", () => {
    const parent = checkbox_elem.parentElement;
    const arrow = checkbox_elem.nextElementSibling.querySelector(".arrow");
    const menu = document.querySelector(
      `.menu-${checkbox_elem.id.slice(9, 13)}`
    );

    if (last_checked && last_checked !== checkbox_elem) {
      const last_arrow =
        last_checked.nextElementSibling.querySelector(".arrow");
      const last_menu = document.querySelector(
        `.menu-${last_checked.id.slice(9, 13)}`
      );

      last_checked.checked = false;
      if (last_arrow) last_arrow.style.transform = "";
      if (last_menu) {
        last_menu.style.visibility = "";
        last_menu.style.opacity = "";
        last_menu.style.transform = "";
      }

      const last_parent = last_checked.parentElement;
      if (last_parent) {
        last_parent.classList.remove("active");
        last_parent.style.color = "";
      }
    }

    if (checkbox_elem.checked) {
      parent.classList.add("active");
      if (arrow) {
        arrow.style.transform = "rotate(180deg)";
      }
      if (menu) {
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0)";
      }

      last_checked = checkbox_elem;
    } else {
      parent.classList.remove("active");
      if (arrow) {
        arrow.style.transform = "";
      }
      if (menu) {
        menu.style.visibility = "";
        menu.style.opacity = "";
        menu.style.transform = "";
      }

      last_checked = null;
    }
  });
});

const out_in = document.querySelectorAll(".out, .in");
out_in.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    elem.style.color = "red";
  });

  elem.addEventListener("mouseout", () => {
    if (!elem.classList.contains("active")) {
      elem.style.color = "";
    }
  });
});

const item = document.querySelectorAll(".item");
item.forEach((item_elem) => {
  item_elem.addEventListener("mouseover", () => {
    item_elem.style.backgroundColor = "rgb(215, 215, 215)";
  });

  item_elem.addEventListener("mouseout", () => {
    item_elem.style.backgroundColor = "";
  });
});

const li = document.querySelectorAll("li");
li.forEach((li_elem) => {
  const radio_elem = li_elem.querySelector(".elem-radio");
  if (radio_elem.checked) {
    li_elem.style.backgroundColor = "black";
    li_elem.style.color = "white";
  }

  li_elem.addEventListener("mouseover", () => {
    if (!radio_elem.checked) {
      li_elem.style.backgroundColor = "rgb(215, 215, 215)";
    }
  });

  li_elem.addEventListener("mouseout", () => {
    if (!radio_elem.checked) {
      li_elem.style.backgroundColor = "";
    }
  });

  radio_elem.addEventListener("change", () => {
    li.forEach((li_elem_inner) => {
      const radio_elem_inner = li_elem_inner.querySelector(".elem-radio");
      if (radio_elem_inner.checked) {
        li_elem_inner.style.backgroundColor = "black";
        li_elem_inner.style.color = "white";
      } else {
        li_elem_inner.style.backgroundColor = "";
        li_elem_inner.style.color = "";
      }
    });
  });
});

const container_nav = document.querySelectorAll(".container-nav");
container_nav.forEach((nav_elem) => {
  const radio = nav_elem.querySelectorAll(".elem-radio");
  radio.forEach((radio_elem) => {
    const radio_elem_id = radio_elem.id;
    const main_obj = nav_elem.nextElementSibling.querySelector(
      `.main-${radio_elem_id.split("-")[1]}`
    );
    if (main_obj) {
      if (!radio_elem.checked) {
        main_obj.style.display = "none";
      } else {
        main_obj.style.display = "";
      }
    }
    radio_elem.addEventListener("change", () => {
      radio.forEach((radio_elem_inner) => {
        const radio_elem_inner_id = radio_elem_inner.id;
        const main_obj_inner = nav_elem.nextElementSibling.querySelector(
          `.main-${radio_elem_inner_id.split("-")[1]}`
        );
        if (!radio_elem_inner.checked) {
          main_obj_inner.style.display = "none";
        } else {
          main_obj_inner.style.display = "";
        }
      });
    });
  });
});
