const Checkbox = ({ ...props }: { className?: string }) => (
    <input {...props} type="checkbox" className={`${props.className || ""} form-checkbox duration-75 rounded`} />
)

export default Checkbox