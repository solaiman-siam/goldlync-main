function CommonInput({ id, label, value, onChange, labelNum }) {
  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <label className="text-lg md:text-xl font-semibold" htmlFor={id}>
        {labelNum}. {label}
      </label>
      <input
        id={id}
        className="w-full rounded border border-gray-400 px-4 h-[52px] md:h-[64px] focus:outline-primary text-sm md:text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
      />
    </div>
  );
}

export default CommonInput;
