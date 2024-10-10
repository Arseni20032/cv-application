import '../styles/CustomInputStyle.scss'

export default function CustomInput({type, name, value, onInputChange, placeholder=''}){
    if(type === 'textarea') {
        return (
            <div className='input-block'>
                <textarea className='input-box'
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
            <div className='input-block'>
                <input className='input-box'
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
  