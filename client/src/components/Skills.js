import skills from '../utils/picturesAndIcons/skills.png'
import skillimg from '../utils/picturesAndIcons/skilldicon.svg'

const Skills =() =>{
    return(
        <div className='divskills' id='skills'>
            <img src={skillimg}/>
            <img src={skills} className='skillsimg'/>
        </div>
    )
}

export default Skills