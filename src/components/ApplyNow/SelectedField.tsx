
type SelectFieldProps = {
    label: string
    name: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    required?: boolean
    options: { value: string; label: string }[]
}

export default function SelectField({
    label,
    name,
    value,
    onChange,
    required,
    options,
}: SelectFieldProps) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                required={required}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
