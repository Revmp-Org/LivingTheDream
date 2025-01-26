const ContactHeader: React.FC<{ content: { title: string, subtitle: string } }> = ({ content }) => {
    return (
        <div className="mb-8 pl-4">
            <h1 className="text-gray-800 text-3xl font-semibold">
                {content.title}
            </h1>
            <p className="text-gray-600 mt-2">
                {content.subtitle}
            </p>
        </div>
    );
};

export default ContactHeader;
