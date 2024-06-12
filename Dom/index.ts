const box = document.querySelector(".box") as HTMLElement;

const input = document.querySelector("input");

const link = document.querySelector("a");

const p = document.querySelector(".paragraph") as HTMLParagraphElement;

const links = document.querySelectorAll(".a");

input?.value;

if (link) {
  link.href = "https//google.com";
}

const elem = document.createElement("a");

link?.addEventListener("scroll", (e) => {
  e.preventDefault();
});
