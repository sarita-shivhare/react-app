import { useState, useEffect } from "react"

let People = () => {
    let aditi={name:'Aditi', age:100}
    let abh={name:'Abhijeet', age:200}

    let [people, setPeople] = useState([aditi,abh])
    let [person, setPerson] = useState(aditi)

    useEffect(() => {
        setTimeout(() => { 
            setPerson(abh) 
        }, 3000)
        setInterval(() => { 
            abh.age+=100
            let people2=[abh,...people]
            setPeople(people2) 
        }, 1000)
    }, [])

    return (
        <div>
            {/* <h1>Full Name:{person.name}</h1>
            <h1>Age:{person.age}</h1> */}
            {people.map(p=> (
            <div key={p.age}>
                 
                <h3><b>name:{p.name}</b></h3>
                <h3><b>age:{p.age}</b></h3>
                </div>
                ))}

        </div>
    )
}
export default People