
function ProfileSocialButtons({ showYoutube = false }) {
    return (
        <p className="mb-0 mt-3">
            <span className="btn btn-social btn-social-o facebook mr-1" aria-hidden="true">
                <i className="fa fa-facebook-f"></i>
            </span>
            <span className="btn btn-social btn-social-o twitter mr-1" aria-hidden="true">
                <i className="fa fa-twitter"></i>
            </span>
            <span className="btn btn-social btn-social-o linkedin mr-1" aria-hidden="true">
                <i className="fa fa-linkedin"></i>
            </span>
            <span className="btn btn-social btn-social-o instagram mr-1" aria-hidden="true">
                <i className="fa fa-instagram"></i>
            </span>
            {showYoutube && (
                <span className="btn btn-social btn-social-o youtube mr-1" aria-hidden="true">
                    <i className="fa fa-youtube"></i>
                </span>
            )}
        </p>
    )
}

export default ProfileSocialButtons