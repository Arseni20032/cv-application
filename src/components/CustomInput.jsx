import '../styles/CustomInputStyle.scss'

export default function CustomInput ({type, name, value, onInputChange, placeholder='', labelName}) {
    if(type === 'textarea') {
        return (
            <div className='input-block'>
                <div className='label-box'>
                    <label>{labelName}</label>
                </div>
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
                <label className='label-box'>{labelName}</label>
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
  