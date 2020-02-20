

if(typeof chrome.app.isInstalled!=='undefined'){
    document.addEventListener("visibilitychange", function() {
        if (document.hidden){
           document.getSelection().removeAllRanges();
        }
      })
      
      document.addEventListener("selectionchange",event=>{
          let select = document.getSelection().toString()
          console.log(select)
          chrome.runtime.sendMessage(select) 
      })
 }