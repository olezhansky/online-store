import axios from "axios";

const newConfigs = {
  customId: "some-global-configs",
  development: {
    database: {
      uri: "mongodb+srv://store:finalprojectfe242021@cluster0.hgx31.mongodb.net/myFirstDatabase",
    },
    email: {
      mailUser: "final.project.fe24@gmail.com",
      mailPassword: "finalprojectfe242021",
      mailService: "gmail",
    },
    auth: {
      secretOrKey: "finalprojectfe242021",
    },
    infinitScrollEnabled: true,
    minOrderValue: 100,
    someCustomParam: "custom params value",
  },
  production: {
    database: {
      uri: "mongodb+srv://store:finalprojectfe242021@cluster0.hgx31.mongodb.net/DatabaseProduction",
    },
    email: {
      mailUser: "final.project.fe24@gmail.com",
      mailPassword: "finalprojectfe242021",
      mailService: "gmail",
    },
    auth: {
      secretOrKey: "finalprojectfe242021",
    },
    infinitScrollEnabled: true,
    minOrderValue: 100,
    someCustomParam: "custom params value",
  },
};

const auth = () => {
  return axios
    .post("/api/configs", newConfigs)
    .then((newConfigs) => {
      /*Do something with newConfigs*/
      console.log("newConfigs", newConfigs);
    })
    .catch((err) => {
      /*Do something with error, e.g. show error to user*/
      console.log(err);
    });
};

export default auth;
