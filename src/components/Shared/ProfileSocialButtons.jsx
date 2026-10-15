
function ProfileSocialButtons({ showYoutube = false }) {
    return (
        <p className="mb-0 mt-3">
            <button type="button" className="btn btn-social btn-social-o facebook mr-1">
                <i className="fa fa-facebook-f"></i>
            </button>
            <button type="button" className="btn btn-social btn-social-o twitter mr-1">
                <i className="fa fa-twitter"></i>
            </button>
            <button type="button" className="btn btn-social btn-social-o linkedin mr-1">
                <i className="fa fa-linkedin"></i>
            </button>
            <button type="button" className="btn btn-social btn-social-o instagram mr-1">
                <i className="fa fa-instagram"></i>
            </button>
            {showYoutube && (
                <button type="button" className="btn btn-social btn-social-o youtube mr-1">
                    <i className="fa fa-youtube"></i>
                </button>
            )}
        </p>
    )
}

export default ProfileSocialButtons