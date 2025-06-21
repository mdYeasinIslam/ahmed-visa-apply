type InputFieldProps = {
    label: string
    name: string
    type?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    required?: boolean
    icon?: React.ReactNode
}

export default function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required,
    icon,
}: InputFieldProps) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required={required}
                />
                {icon && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        {icon}
                    </span>
                )}
            </div>
        </div>
    )
}