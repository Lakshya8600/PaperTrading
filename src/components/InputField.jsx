import { useState } from "react";

const InputField = ({ type, placeholder, icon, onChange }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      {/* You can use a label here for better accessibility */}
      <label htmlFor={placeholder} className="input-label">{placeholder}</label>
      <input
        id={placeholder}
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        required
        onChange={onChange} // Handling the onChange
      />
      {icon && <i className="material-symbols-rounded">{icon}</i>}
      {type === 'password' && (
        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  );
};

export default InputField;
