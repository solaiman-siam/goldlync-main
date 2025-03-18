function CommonInput({ id, label, value, onChange, labelNum }) {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-xl font-semibold" htmlFor={id}>
        {labelNum}. {label}
      </label>
      <input
        id={id}
        className="w-full rounded border border-gray-400 px-4 py-4 focus:outline-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
      />
    </div>
  );
}

export default CommonInput;
