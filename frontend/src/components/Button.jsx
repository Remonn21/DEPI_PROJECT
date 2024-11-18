function Button({ label, onClick, disabled = false, type = "button" }) {
   return (
      <button
         disabled={disabled}
         type={type}
         onClick={onClick}
         className="w-full bg-navyBlue py-2 text-white transition duration-300 hover:bg-navyBlue/75"
      >
         {label}
      </button>
   );
}

export default Button;
