function SectionTitle({ title, subtitle, align = "left", col = 6 }) {
    const isCenter = align === "center";
    return (
        <div className={`row ${isCenter ? "justify-content-center" : ""}`}>
            <div className={`col-md-${col} ${isCenter ? "mx-auto" : ""}`}>
                <div className={isCenter ? "title__head" : "title__head-v2"}>
                    <h2 className={`text-capitalize ${isCenter ? "text-center" : ""}`}>{title}</h2>
                    <p className={`text-capitalize ${isCenter ? "text-center" : ""}`}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle