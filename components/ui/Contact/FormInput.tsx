
type FormInputProps = {
    name:string;
    type?:string;
    value:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};

const FormInput = ({name, type="text", value, onChange,placeholder}: FormInputProps) => (
    <div className="mb-4">

        <label className="block text-gray-700 text-sm font-bold mb-2 capitalize">{name}</label>
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border border-gray-300 rounded w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5C1B23]"
            required
    />

    </div>
);

export default FormInput;