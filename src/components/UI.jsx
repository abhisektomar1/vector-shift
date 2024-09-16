export const Label = ({ children, htmlFor }) => {
    return (
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {children}
      </label>
    );
  };
  
 export const Input = ({ id, value, onChange, type = "text", placeholder = "" }) => {
    return (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
      />
    );
  };



 export const Select = ({ id, value, onChange, options }) => {
    return (
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };


  export const TextArea = ({ id, value, onChange, placeholder = "", rows = 3 }) => {
    return (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300 resize-none"
      />
    );
  };