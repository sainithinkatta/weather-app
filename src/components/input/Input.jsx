import './input.css';

function Input({ setLocationInput, onKeyPress }) {
    function handleLocationChange(inputValue) {
        setLocationInput(inputValue);
    }
    
    return (
        <input 
            className="input"
            type="text" 
            placeholder="Enter Location"
            onChange={(event) => handleLocationChange(event.target.value)}
            onKeyDown={onKeyPress}
        />
    );
}

export default Input;