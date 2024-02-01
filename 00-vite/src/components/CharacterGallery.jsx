import CharacterData from '../data/characterData.json';
import Character from './charcter';


function CharacterGallery() {
    return (
        <div>

            {CharacterData.map(
                (Character) => <Character
                key={Character.id}
                name={Character.name}
                img={Character.imgUrl}
                height={Character.height}
                race={Character.race}
                gender={Character.gender}
                dob={Character.birth}
                spouse={Character.spouse}
                dod={Character.death}
                realm={Character.realm}
                hair={Character.hair}
                wikiUrl={Character.wikiUrl}


                />
            )
            }
        </div>
    )
}

// 


export default CharacterGallery;