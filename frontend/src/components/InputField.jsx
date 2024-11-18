function InputField({ type, placeholder, value, onChange, name }) {
   return (
      <div>
         <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className="w-full border border-navyBlue border-opacity-15 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
         />
      </div>
   );
}

export default InputField;
