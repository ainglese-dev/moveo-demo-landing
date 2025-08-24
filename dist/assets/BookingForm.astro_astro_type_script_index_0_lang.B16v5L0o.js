document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("booking-form");t&&t.addEventListener("submit",async function(s){s.preventDefault();const i=t.querySelectorAll("[required]");let d=!0;if(i.forEach(e=>{e.value.trim()?e.classList.remove("border-red-500"):(e.classList.add("border-red-500"),d=!1)}),!d){alert("Por favor completa todos los campos obligatorios.");return}const n=t.querySelector('button[type="submit"]');n&&(n.disabled=!0,n.innerHTML=`
            <span class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          `);try{const e=new Map,m=t.querySelector("#name")?.value?.trim()||"",u=t.querySelector("#email")?.value?.trim()||"",p=t.querySelector("#phone")?.value?.trim()||"",f=t.querySelector("#serviceType")?.value||"",h=t.querySelector("#message")?.value?.trim()||"",b=t.querySelector("#consent")?.checked;m&&e.set("entry.1699377430",m),u&&e.set("entry.932699630",u),p&&e.set("entry.925299747",p),f&&e.set("entry.1475595085",f),h&&e.set("entry.1992337220",h),b&&e.set("entry.1632736675","acepto-politica-privacidad");const v="https://docs.google.com/forms/d/e/1FAIpQLSdy7Sv9ktJFTfHZAIMrgN4A7d0kaziM9wXmdrzYBMYeiHu9MQ/formResponse",y=[];e.forEach((c,r)=>{const o=encodeURIComponent(c).replace(/%20/g,"+");y.push(`${r}=${o}`)});const g=`${v}?${y.join("&")}`;try{const c=await fetch(g,{method:"GET",mode:"no-cors",credentials:"omit"});await new Promise(r=>setTimeout(r,1e3)),l()}catch{try{const r=document.createElement("iframe");r.name="hidden_iframe",r.style.display="none",document.body.appendChild(r);const o=document.createElement("form");o.target="hidden_iframe",o.method="GET",o.action=v,e.forEach((w,x)=>{const a=document.createElement("input");a.type="hidden",a.name=x,a.value=w,o.appendChild(a)}),document.body.appendChild(o),o.submit(),setTimeout(()=>{document.body.removeChild(r),document.body.removeChild(o)},2e3),l()}catch{const o=g.replace("/formResponse","/viewform");window.open(o,"_blank"),l()}}}catch(e){console.error("Form submission failed:",e),alert("Hubo un problema al enviar el formulario. Por favor intenta nuevamente o contáctanos por WhatsApp."),n&&(n.disabled=!1,n.innerHTML=`
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Enviar solicitud
              </span>
            `)}})});function l(t="Google"){const s=document.getElementById("booking-form");if(!s)return;const i=t==="WhatsApp"?"Se ha abierto WhatsApp con tu información. Te responderemos muy pronto.":"Gracias por tu interés en MOVEO. Nos pondremos en contacto contigo en menos de 24 horas.";s.innerHTML=`
      <div class="text-center py-12">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-moveo-deep-blue dark:text-moveo-yellow mb-2">¡Solicitud enviada exitosamente!</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          ${i}
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <p class="text-sm text-blue-800 dark:text-blue-200">
            <strong>¿Necesitas una respuesta más rápida?</strong><br>
            Escríbenos directamente por WhatsApp para atención inmediata.
          </p>
        </div>
        <a 
          href="https://wa.me/573142265559?text=Hola,%20acabo%20de%20enviar%20un%20formulario%20y%20me%20gustaría%20una%20respuesta%20rápida"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.587z"/>
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    `}
