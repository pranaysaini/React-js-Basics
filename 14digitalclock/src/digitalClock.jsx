import React, {useState, useEffect} from 'react';

function DigitalClock (){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function formattime(){
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hours>=12 ? "PM" : "AM"

        hours = hours % 12 || 12

        return `${padZero(hours)} : ${padZero(min)} : ${padZero(sec)} ${meridiem}`;

    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number
    }

    return (
        <>
            <div className="w-full h-screen bg-green-500">
                <p className="flex flex-wrap justify-center items-center text-7xl font-mono pt-60 text-red-600 font-bold">{formattime()}</p>
            </div>
            
        </>
    );
}

export default DigitalClock