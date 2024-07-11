function Button() {

    // const handleClick = () => console.log("Yo Man");
    // const handleClick2 = (name) => console.log(`${name} stop it` );

    let count = 0;
    const handleClick2 = (name) => {
        if(count<3){
            count++;
            console.log(`${name} stop clicking me`)
        }
        else{
            console.log(`${name} click me dude`)
        }
    }

    const newClick = (e) => e.target.textContent = 'Ouch 🥴'
    
    return (
        
            // <button onClick = {() => handleClick2("Deadpool")}> Clik Me </button>
            <button onClick={(e) => newClick(e)}>Click Me 😊</button>
            
    );
}
export default Button