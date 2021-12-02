

const signIn = () => {
    return window.gapi.auth2
        .getAuthInstance()
        .signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly' })
        .then(googleUser => ({
            userProfile: {
                image: googleUser.getBasicProfile().getImageUrl(),
                email: googleUser.getBasicProfile().getEmail(),
                name: googleUser.getBasicProfile().getName(),
                id: googleUser.getBasicProfile().getId(),
            }, 
            accessToken: googleUser.wc.access_token,
            accessTokenType: googleUser.wc.token_type
        }))
}

export const authApi = { signIn };