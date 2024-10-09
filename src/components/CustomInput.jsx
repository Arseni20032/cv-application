export default function CustomInput({type, name, value, onInputChange, placeholder=''}){
    if(type === 'textarea') {
        return (
            <div>
                <textarea
                    name={name}
                    value={value}
                    onChange={onInputChange}
                    placeholder={placeholder}
                />
            </div>
        )
    } 
    else {
        return (
            <div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onInputChange}
                    placeholder={placeholder}
                />
            </div>
        )
    }
  }
  