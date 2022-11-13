import axios from "axios";

axios.defaults.baseURL = "https://chickensport.000webhostapp.com/ChickenSport/";

const url = "?mod=user&action=addUserAction";
const location = "?mod=location&action=getLocationList";
const hobbyUrl = "?mod=hobby&action=getHobbyList";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUsersWithSameHobbies = async (userInfo) => {
  try {
    const { data } = await axios.get(
      `?mod=user&action=getNearByUser&location_id=${userInfo.location_id}&hobby_id=${userInfo.hobby_id}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const signup = async (user) => {
  try {
    const { data } = await axios.post("?mod=user&action=addUser", user);
    return data;
  } catch (err) {
    console.log(err);
  }
};
