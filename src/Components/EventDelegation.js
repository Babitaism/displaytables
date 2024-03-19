export default function EventDelegation() {

    const div = document.querySelector("div")

    div.addEventListener("click",(event)=>{
    if(event.target.tagName=="BUTTON"){
      console.log(`${event.target.innerText} was clicked`)
    }
    })

      return (
        <div>
          <button>Click</button>
          <button>Save</button>
          <button>Delete</button>
        </div>
      );
    }
