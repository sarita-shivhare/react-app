import { useState, useEffect } from "react"

let Card = () => {
    let [city, setCity] = useState('pune')
    let [temp, setTemp] = useState('100C')

    useEffect(() => {
        setTimeout(() => {
            setCity('mumbai')
            setTemp("105b")
            setTimeout(() => {
                setCity('Pune')
                setTemp("107b")
            }, 3050)
        }, 3000)
    }, [])

    return (
        <div>
            <h1>city:{city}</h1>
            
            <h2>temp:{temp}</h2>
        </div>
            )
}
export default Card