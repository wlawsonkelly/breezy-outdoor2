import axios from "axios";

export default {

    //user routes

    signUpUser: function (userData) {
        return axios.post("/api/user", userData)
    },

    loginUser: function (userData) {
        return axios.post("/api/user/login", userData)
    },

    logOutUser: function () {
        return axios.get("/api/user/logout");
    },

    getUser: function () {
        return axios.get("/api/user/user_data")
    },

    //campaign routes

    getActiveCampaigns: function () {
        return axios.get("/api/campaign/active");
    },

    getCampaign: function (id) {
        return axios.get("/api/campaign/" + id);
    },

    getPastCampaigns: function () {
        return axios.get("/api/campaign/past")
    }
};