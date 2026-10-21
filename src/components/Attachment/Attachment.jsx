
function Attachment({
    title = "Property Attachments",
    attachments = [],
}) {
    const files = attachments.filter(
        (file) => file.href && !String(file.href).startsWith("javascript:")
    );
    if (!files.length) return null;
    return (
        <div className="download mb-0">
            <h5 className="text-center text-capitalize">{title}</h5>
            {files.map((file) => (
                <div className="download__item" key={file.id}>
                     <a href={file.href} rel="noreferrer">
                        <i className={`fa ${file.icon} mr-3`} aria-hidden="true"></i>
                        {file.label}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Attachment