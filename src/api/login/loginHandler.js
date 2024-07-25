import loginConfig from "@/config/loginConfig";

export const loginHandler = () => {
    window.location.href =`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${loginConfig.REST_API_KEY}&redirect_uri=${loginConfig.REDIRECT_URI}`;
}