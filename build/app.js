(()=>{"use strict";console.log("Починаємо працювати"),console.log("Vladislav",39,"Michigan"),document.addEventListener("DOMContentLoaded",(function(){!function(){const t=document.getElementById("task-list"),e=document.getElementById("task-input"),n=document.getElementById("add-task");t.addEventListener("click",(function(t){t.target.classList.contains("delete-button")&&t.target.parentElement.remove()})),n.addEventListener("click",(function(){const n=e.value;if(""!==n.trim()){const a=document.createElement("li");a.className="task-item",a.innerHTML=`\n                    <span>${n}</span>\n                    <button class="delete-button">Видалити</button>\n                `,t.appendChild(a),e.value=""}}))}()}))})();