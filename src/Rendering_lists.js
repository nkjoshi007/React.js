const People=[
    {
        id:1,
        Name:'Naveen sharma',
        Profession:'Js developer'
    },
    {
        id:2,
        Name:'Shivam sharma',
        Profession:'Software developer'
    },
    {
        id:3,
        Name:'Kapil sharma',
        Profession:'Full stack developer'
    },
    {
        id:4,
        Name:'Sudarshan sharma',
        Profession:'Software developer'
    },
    {
        id:5,
        Name:'Abhishek sharma',
        Profession:'Accountant'
    }
]
const List=()=>{
    const listitems=People.map(Person=>
        <li className="list" key={Person.id}>
            {Person.Name} who has a Profession of {Person.Profession}
        </li>)
    return(
        <ul>{listitems}</ul>
    )
}

export default List;