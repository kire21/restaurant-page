(()=>{"use strict";const e=function(){const e=document.querySelector("#main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h2");t.classList.add("contact__us"),t.textContent="Contact us";const n=document.createElement("p");n.classList.add("contact__mail"),n.textContent="Mail: contact@bowl.com";const a=document.createElement("p");return a.classList.add("contact__phone"),a.textContent="Phone: +00 000 000",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())};const t=function(){const t=document.querySelector("#main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("hero","grid","grid--1x2");const n=document.createElement("div");n.classList.add("welcome__text","grid");const a=document.createElement("h1");a.classList.add("hero__heading"),a.textContent="A bowl of love from Chinese cuisine for you";const d=document.createElement("p");d.textContent="Lo mein is a Chinese dish with egg noodles. It often contains vegetables and some type of meat or seafood, usually beef, chicken, pork, or shrimp. It might also be served with wontons (called huntun 馄饨 in Mandarin) although wontons are usually a soup ingredient. It can also be eaten with just vegetables.";const i=document.createElement("button");i.classList.add("btn"),i.textContent="Contact us",i.addEventListener("click",(t=>{t.target.classList.contains("active")||(function(e){document.querySelectorAll(".nav__item").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}(i),e())}));const c=document.createElement("div");c.classList.add("hero__image");const s=document.createElement("img");return s.classList.add("img"),s.src="./images/noodle-bowl.png",s.alt="Noodle in bowl",t.appendChild(n),t.appendChild(c),n.appendChild(a),n.appendChild(d),n.appendChild(i),c.appendChild(s),t}())};function n(){const e=document.createElement("div");e.classList.add("hero","grid","grid--1x2");const t=document.createElement("div");t.classList.add("welcome__text","grid");const n=document.createElement("h1");n.classList.add("hero__heading"),n.textContent="it's not just FOOD, it's an Experience.";const d=document.createElement("p");d.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel\n  impedit voluptatum laudantium debitis saepe, porro laboriosam,\n  dolore rerum ipsa voluptatem assumenda perspiciatis quo eveniet\n  illum, harum magni in perferendis cumque? Lorem ipsum dolor sit\n  amet, consectetur adipisicing elit. Vel impedit voluptatum\n  laudantium debitis saepe, porro laboriosam, dolore rerum ipsa\n  voluptatem assumenda perspiciatis quo eveniet illum, harum magni in\n  perferendis cumque?";const i=document.createElement("div");i.classList.add("hero__image");const c=document.createElement("img");c.classList.add("img"),c.src="./images/noodle-menu.png",c.alt="Noodle in bowl";const s=document.createElement("div");return s.classList.add("menu","grid","grid--2x3"),e.appendChild(t),t.appendChild(n),t.appendChild(d),e.appendChild(i),i.appendChild(c),main.appendChild(s),s.appendChild(a("Noodle One","Price: 10$")),s.appendChild(a("Noodle Two","Price: 10$")),s.appendChild(a("Noodle Three","Price: 10$")),s.appendChild(a("Noodle Four","Price: 10$")),s.appendChild(a("Noodle Five","Price: 10$")),s.appendChild(a("Noodle Six","Price: 10$")),e}const a=function(e,t){const n=document.createElement("div");n.classList.add("recipes");const a=document.createElement("div");a.classList.add("menu__header");const d=document.createElement("div");d.classList.add("info__price");const i=document.createElement("h3");i.classList.add("recipe__heading"),i.textContent=e;const c=document.createElement("p");c.textContent=t;const s=document.createElement("img");s.classList.add("recipe__img");const o=e.toLowerCase().split(" ");return s.src=`./images/${o[0]}-${o[1]}.png`,n.appendChild(a),a.appendChild(s),n.appendChild(d),d.appendChild(i),d.appendChild(c),n},d="Kire Zdraveski".toLowerCase().split(" ");function i(e){document.querySelectorAll(".nav__item").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}console.log(d[0],d[1]),function(){const a=document.querySelector("#content");a.appendChild(function(){const a=document.createElement("header");a.classList.add("header");const d=document.createElement("nav");d.classList.add("nav","flex");const c=document.createElement("div");c.classList.add("logo__text");const s=document.createElement("h3");s.classList.add("logo"),s.textContent="Chinese Bowl";const o=document.createElement("div");o.classList.add("nav");const l=document.createElement("ul");l.classList.add("nav__list","flex");const r=document.createElement("a");r.classList.add("nav__link");const m=document.createElement("li");m.classList.add("nav__item"),m.textContent="Home",m.addEventListener("click",(e=>{e.target.classList.contains("active")||(i(m),t())}));const p=document.createElement("a");p.classList.add("nav__link");const u=document.createElement("li");u.classList.add("nav__item"),u.textContent="Menu",u.addEventListener("click",(e=>{e.target.classList.contains("active")||(i(u),function(){const e=document.querySelector("#main");e.textContent="",e.appendChild(n())}())}));const h=document.createElement("a");h.classList.add("nav__link");const C=document.createElement("li");return C.classList.add("nav__item"),C.textContent="Contact",C.addEventListener("click",(t=>{t.target.classList.contains("active")||(i(C),e())})),a.appendChild(d),d.appendChild(c),c.appendChild(s),d.appendChild(o),o.appendChild(l),l.appendChild(r),r.appendChild(m),l.appendChild(p),p.appendChild(u),l.appendChild(h),h.appendChild(C),a}()),a.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),a.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.classList.add("footer__text"),t.textContent="Made by Kire Zdraveski",e.appendChild(t),e}()),i(document.querySelector(".nav__item")),t()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0ssY0FBYyxLQU10QyxPQUxBZ0UsRUFBTy9ELFVBQVVDLElBQUksZ0JBQ3JCOEQsRUFBT25FLFlBQWMseUJBRXJCa0UsRUFBT2pFLFlBQVlrRSxHQUVaRCxFQVFhRSxJQUVwQixFQUFnQnRFLFNBQVNDLGNBQWMsZUFDdkMsSUNySEYsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnRhY3RVcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0X191cycpO1xuICBjb250YWN0VXMudGV4dENvbnRlbnQgPSBgQ29udGFjdCB1c2A7XG5cbiAgY29uc3QgY29udGFjdE1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RNYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX21haWwnKTtcbiAgY29udGFjdE1haWwudGV4dENvbnRlbnQgPSAnTWFpbDogY29udGFjdEBib3dsLmNvbSc7XG5cbiAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0UGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9fcGhvbmUnKTtcbiAgY29udGFjdFBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiArMDAgMDAwIDAwMCc7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RNYWlsKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0UGhvbmUpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsImltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycsICdncmlkJywgJ2dyaWQtLTF4MicpO1xuXG4gIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVfX3RleHQnLCAnZ3JpZCcpO1xuXG4gIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVyb0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVyb19faGVhZGluZycpO1xuICBoZXJvSGVhZGluZy50ZXh0Q29udGVudCA9ICdBIGJvd2wgb2YgbG92ZSBmcm9tIENoaW5lc2UgY3Vpc2luZSBmb3IgeW91JztcblxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGVyb1RleHQudGV4dENvbnRlbnQgPVxuICAgICdMbyBtZWluIGlzIGEgQ2hpbmVzZSBkaXNoIHdpdGggZWdnIG5vb2RsZXMuIEl0IG9mdGVuIGNvbnRhaW5zIHZlZ2V0YWJsZXMgYW5kIHNvbWUgdHlwZSBvZiBtZWF0IG9yIHNlYWZvb2QsIHVzdWFsbHkgYmVlZiwgY2hpY2tlbiwgcG9yaywgb3Igc2hyaW1wLiBJdCBtaWdodCBhbHNvIGJlIHNlcnZlZCB3aXRoIHdvbnRvbnMgKGNhbGxlZCBodW50dW4g6aaE6aWoIGluIE1hbmRhcmluKSBhbHRob3VnaCB3b250b25zIGFyZSB1c3VhbGx5IGEgc291cCBpbmdyZWRpZW50LiBJdCBjYW4gYWxzbyBiZSBlYXRlbiB3aXRoIGp1c3QgdmVnZXRhYmxlcy4nO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbik7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG5cbiAgY29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKCdoZXJvX19pbWFnZScpO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltZycpO1xuICBpbWFnZS5zcmMgPSAnLi9pbWFnZXMvbm9vZGxlLWJvd2wucG5nJztcbiAgaW1hZ2UuYWx0ID0gJ05vb2RsZSBpbiBib3dsJztcblxuICBoZXJvLmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuICB3ZWxjb21lVGV4dC5hcHBlbmRDaGlsZChoZXJvSGVhZGluZyk7XG4gIHdlbGNvbWVUZXh0LmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcbiAgd2VsY29tZVRleHQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgaGVyb0ltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICByZXR1cm4gaGVybztcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKG5hdkl0ZW0pIHtcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtJyk7XG5cbiAgbmF2SXRlbXMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xuICAgIGlmIChuYXZJdGVtICE9PSB0aGlzKSB7XG4gICAgICBuYXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycsICdncmlkJywgJ2dyaWQtLTF4MicpO1xuXG4gIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVfX3RleHQnLCAnZ3JpZCcpO1xuXG4gIGNvbnN0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbWVudUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVyb19faGVhZGluZycpO1xuICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9IGBpdCdzIG5vdCBqdXN0IEZPT0QsIGl0J3MgYW4gRXhwZXJpZW5jZS5gO1xuXG4gIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51VGV4dC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVmVsXG4gIGltcGVkaXQgdm9sdXB0YXR1bSBsYXVkYW50aXVtIGRlYml0aXMgc2FlcGUsIHBvcnJvIGxhYm9yaW9zYW0sXG4gIGRvbG9yZSByZXJ1bSBpcHNhIHZvbHVwdGF0ZW0gYXNzdW1lbmRhIHBlcnNwaWNpYXRpcyBxdW8gZXZlbmlldFxuICBpbGx1bSwgaGFydW0gbWFnbmkgaW4gcGVyZmVyZW5kaXMgY3VtcXVlPyBMb3JlbSBpcHN1bSBkb2xvciBzaXRcbiAgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVmVsIGltcGVkaXQgdm9sdXB0YXR1bVxuICBsYXVkYW50aXVtIGRlYml0aXMgc2FlcGUsIHBvcnJvIGxhYm9yaW9zYW0sIGRvbG9yZSByZXJ1bSBpcHNhXG4gIHZvbHVwdGF0ZW0gYXNzdW1lbmRhIHBlcnNwaWNpYXRpcyBxdW8gZXZlbmlldCBpbGx1bSwgaGFydW0gbWFnbmkgaW5cbiAgcGVyZmVyZW5kaXMgY3VtcXVlP2A7XG5cbiAgY29uc3QgbWVudUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKCdoZXJvX19pbWFnZScpO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltZycpO1xuICBpbWFnZS5zcmMgPSAnLi9pbWFnZXMvbm9vZGxlLW1lbnUucG5nJztcbiAgaW1hZ2UuYWx0ID0gJ05vb2RsZSBpbiBib3dsJztcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScsICdncmlkJywgJ2dyaWQtLTJ4MycpO1xuXG4gIGhlcm8uYXBwZW5kQ2hpbGQod2VsY29tZVRleHQpO1xuICB3ZWxjb21lVGV4dC5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG4gIHdlbGNvbWVUZXh0LmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcbiAgaGVyby5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xuICBtZW51SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobG9hZFJlY2lwZXMoJ05vb2RsZSBPbmUnLCAnUHJpY2U6IDEwJCcpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChsb2FkUmVjaXBlcygnTm9vZGxlIFR3bycsICdQcmljZTogMTAkJykpO1xuICBtZW51LmFwcGVuZENoaWxkKGxvYWRSZWNpcGVzKCdOb29kbGUgVGhyZWUnLCAnUHJpY2U6IDEwJCcpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChsb2FkUmVjaXBlcygnTm9vZGxlIEZvdXInLCAnUHJpY2U6IDEwJCcpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChsb2FkUmVjaXBlcygnTm9vZGxlIEZpdmUnLCAnUHJpY2U6IDEwJCcpKTtcbiAgbWVudS5hcHBlbmRDaGlsZChsb2FkUmVjaXBlcygnTm9vZGxlIFNpeCcsICdQcmljZTogMTAkJykpO1xuXG4gIHJldHVybiBoZXJvO1xufVxuXG5jb25zdCBsb2FkUmVjaXBlcyA9IGZ1bmN0aW9uIChuYW1lLCBwcmljZSkge1xuICBjb25zdCByZWNpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlY2lwZXMuY2xhc3NMaXN0LmFkZCgncmVjaXBlcycpO1xuXG4gIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51X19oZWFkZXInKTtcblxuICBjb25zdCBpbmZvUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb1ByaWNlLmNsYXNzTGlzdC5hZGQoJ2luZm9fX3ByaWNlJyk7XG5cbiAgY29uc3QgcmVjaXBlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHJlY2lwZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncmVjaXBlX19oZWFkaW5nJyk7XG4gIHJlY2lwZUhlYWRpbmcudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IHJlY2lwZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByZWNpcGVQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gIGNvbnN0IHJlY2lwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHJlY2lwZUltYWdlLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZV9faW1nJyk7XG4gIGNvbnN0IHNldHVwUm9vdCA9IG5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xuXG4gIHJlY2lwZUltYWdlLnNyYyA9IGAuL2ltYWdlcy8ke3NldHVwUm9vdFswXX0tJHtzZXR1cFJvb3RbMV19LnBuZ2A7XG5cbiAgcmVjaXBlcy5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbiAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChyZWNpcGVJbWFnZSk7XG4gIHJlY2lwZXMuYXBwZW5kQ2hpbGQoaW5mb1ByaWNlKTtcbiAgaW5mb1ByaWNlLmFwcGVuZENoaWxkKHJlY2lwZUhlYWRpbmcpO1xuICBpbmZvUHJpY2UuYXBwZW5kQ2hpbGQocmVjaXBlUHJpY2UpO1xuXG4gIHJldHVybiByZWNpcGVzO1xufTtcblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG5cbmNvbnN0IG5hbWUgPSAnS2lyZSBaZHJhdmVza2knO1xuXG5jb25zdCBmdW4gPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcblxuY29uc29sZS5sb2coZnVuWzBdLCBmdW5bMV0pO1xuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuLy8gaW1wb3J0IGxvYWRSZWNpcGVzIGZyb20gJy4vcmVjaXBlcy5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicsICdmbGV4Jyk7XG5cbiAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb1RleHQuY2xhc3NMaXN0LmFkZCgnbG9nb19fdGV4dCcpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgbG9nby50ZXh0Q29udGVudCA9ICdDaGluZXNlIEJvd2wnO1xuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZfX2xpc3QnLCAnZmxleCcpO1xuXG4gIGNvbnN0IG5hdkxpbmtIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBuYXZMaW5rSG9tZS5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmsnKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW0nKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbmF2TGlua01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5hdkxpbmtNZW51LmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluaycpO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbScpO1xuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKTtcbiAgICBsb2FkTWVudSgpO1xuICAgIC8vIGxvYWRSZWNpcGVzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5hdkxpbmtDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBuYXZMaW5rQ29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmsnKTtcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW0nKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG4gIGxvZ29UZXh0LmFwcGVuZENoaWxkKGxvZ28pO1xuICBuYXYuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2TGlua0hvbWUpO1xuICBuYXZMaW5rSG9tZS5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChuYXZMaW5rTWVudSk7XG4gIG5hdkxpbmtNZW51LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdkxpbmtDb250YWN0KTtcbiAgbmF2TGlua0NvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbigpIHt9XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihuYXZJdGVtKSB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faXRlbScpO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goKG5hdkl0ZW0pID0+IHtcbiAgICBpZiAobmF2SXRlbSAhPT0gdGhpcykge1xuICAgICAgbmF2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IG1hZGVCeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWFkZUJ5LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9fdGV4dCcpO1xuICBtYWRlQnkudGV4dENvbnRlbnQgPSAnTWFkZSBieSBLaXJlIFpkcmF2ZXNraSc7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKG1hZGVCeSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19pdGVtJykpO1xuICBsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTtcbiIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tICcuL3dlYnNpdGUnO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiY29udGFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWN0VXMiLCJjb250YWN0TWFpbCIsImNvbnRhY3RQaG9uZSIsImNyZWF0ZUNvbnRhY3QiLCJoZXJvIiwid2VsY29tZVRleHQiLCJoZXJvSGVhZGluZyIsImhlcm9UZXh0IiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsIm5hdkl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRoaXMiLCJyZW1vdmUiLCJzZXRBY3RpdmVCdXR0b24iLCJoZXJvSW1hZ2UiLCJpbWFnZSIsInNyYyIsImFsdCIsImNyZWF0ZUhvbWUiLCJjcmVhdGVNZW51IiwibWVudUhlYWRpbmciLCJtZW51VGV4dCIsIm1lbnVJbWFnZSIsIm1lbnUiLCJsb2FkUmVjaXBlcyIsIm5hbWUiLCJwcmljZSIsInJlY2lwZXMiLCJtZW51SGVhZGVyIiwiaW5mb1ByaWNlIiwicmVjaXBlSGVhZGluZyIsInJlY2lwZVByaWNlIiwicmVjaXBlSW1hZ2UiLCJzZXR1cFJvb3QiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZnVuIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJoZWFkZXIiLCJuYXYiLCJsb2dvVGV4dCIsImxvZ28iLCJuYXZpZ2F0aW9uIiwibmF2TGlzdCIsIm5hdkxpbmtIb21lIiwiaG9tZUJ1dHRvbiIsIm5hdkxpbmtNZW51IiwibWVudUJ1dHRvbiIsIm5hdkxpbmtDb250YWN0IiwiY29udGFjdEJ1dHRvbiIsImNyZWF0ZUhlYWRlciIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZU1haW4iLCJmb290ZXIiLCJtYWRlQnkiLCJjcmVhdGVGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9