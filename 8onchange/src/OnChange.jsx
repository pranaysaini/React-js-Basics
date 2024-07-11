import React, {useState} from 'react'

function OnChangeEvent () {

    const [name, setName] = useState("Guest")
    const[num, setNum] = useState(1)
    const[comment, setComment] = useState()
    const[payment, setPayment] = useState("Select")
    const [shipping, setShipping] = useState("")

    function changeName (event) {
        setName(event.target.value);
    }

    function changeNum(event){
        setNum(event.target.value)
    }

    function changeComment(event){
        setComment(event.target.value)
    }

    function changePayment(event){
        setPayment(event.target.value)
    }

    function handleShipping(event) {
        setShipping(event.target.value)
    }

    return (
        <>
            <input value={name} onChange={changeName} />
            <p>Name: {name}</p>

            <input type="number" value={num} onChange={changeNum} />
            <p>Name: {num}</p>

            <textarea value={comment} onChange={changeComment} placeholder="Enter Details"></textarea>
            <p>Details: {comment}</p>

            <select value={payment} onChange={changePayment}>
                <option value="">Select Payment Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Master Card</option>
                <option value="RuPay">Rupay</option>
                <option value="UPI">UPI</option>
            </select>

            <p>Payment Method: {payment}</p>
            
            <label>
                <input type="radio" value="Pick-up" checked={shipping==="Pick-up"} onChange={handleShipping} />
                Pick-up
            </label>

            <br/>

            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShipping} />
                Delivery
            </label>

            <p>Shipping Method: {shipping}</p>

            
        </>
    );

}
export default OnChangeEvent