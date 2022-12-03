import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const withUser2 = Component => {
  return props => {
    const { url, userId } = props;
    const [userdata, setuserData] = useState(null);
    useEffect(() => {
      (async () => {
        const resp = await axios.get(`${url}${userId}`);
        setuserData(resp.data.data);
      })();
    }, [userId]);
    return <Component user={userdata} />;
  };
};
