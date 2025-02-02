// eslint-disable-next-line react/prop-types
const ProfileComponent = ({formData, setFormData})=>{

    const handleInputChange = (e)=> {

        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        console.log(formData);
        
    }

    return (
        <>
        <div className="profile-form">
            <div className="input">
                <label>Name: </label>
                <input onChange={handleInputChange} type="text" name="name" />
            </div>
             <div className="input">
                <label>Age: </label>
                 <input onChange={handleInputChange}  type="age" name="age" />
            </div>
               <div className="input">
                <label>Email: </label>
                <input onChange={handleInputChange}  type="email" name="email" />
            </div>
        </div>
        </>
    )
}

export default ProfileComponent;