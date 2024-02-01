function Character(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img}/>
       
            <ul>
                {/* <li>{props.height}</li> */}
                <li> Race{props.race}</li>
                {/* <li>{props.gender}</li> */}
                <li> Date of Birth: {props.dob}</li>
                <li> Spouse: {props.spouse}</li>
                <li> Date of Death: {props.dod}</li>
                <li> Realm: {props.realm}</li>
                {/* <li>{props.hair}</li> */}
                {/* <li>{props.wikiUrl}</li> */}

            </ul>
        </div>
    )
}

export default Character;

// "_id": "5cd99d4bde30eff6ebccfd0d",
// "height": "1.22m (4'0\")",
// "race": "Hobbit",
// "gender": "Male",
// "birth": "April 6 ,2980",
// "spouse": "Rosie Cotton",
// "death": "Still alive, after going to the ,Undying Lands, in ,FO 61",
// "realm": "",
// "hair": "Blond (movie)",
// "name": "Samwise Gamgee",
// "wikiUrl": "http://lotr.wikia.com//wiki/Samwise_Gamgee",
// "imgUrl": "https://www.frontporchrepublic.com/wp-content/uploads/2011/05/Samwise-Gamgee.jpg"