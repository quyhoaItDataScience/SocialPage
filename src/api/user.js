import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const getUserUrl = "?mod=user&action=getUserList";
const location = "?mod=location&action=getLocationList";
const hobbyUrl = "?mod=hobby&action=getHobbyList";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(getUserUrl);
    console.log(data);
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
    // const data = await fetch(
    //   "http://localhost/codebase/test_data/api/user.php",
    //   {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   }
    // );
    const { data } = await axios.post("/user", user);

    console.log(data);
    return data;
  } catch (err) {}
};

export const getHobbies = async () => {
  try {
    const { data } = await axios.get(hobbyUrl);
    return data;
  } catch (err) {
    console.log(err);
  }
};
