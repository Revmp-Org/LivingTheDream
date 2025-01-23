const SectionWrapper = ({ children, ...props }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section {...props} className={`py-4 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper