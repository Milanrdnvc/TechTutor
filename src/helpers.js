export function animatePara(para) {
  if (!para) {
    return;
  }
  const windowHeight = window.innerHeight;
  const paraPos = para.getBoundingClientRect().top;

  if (paraPos <= windowHeight / 1.8 && paraPos >= 50) {
    para.classList.add('para-animate');
  }
}
