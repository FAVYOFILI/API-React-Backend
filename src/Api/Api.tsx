import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

interface Data {
  getUsers: Users[];
}

const Api = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Data>(
          "http://localhost:3400/api/getall"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error, "error fetching data");
      }
    };
    fetchProduct();
  }, []);




  return (
    <div className="grid grid-cols-4 bg-amber-700 justify-between items-center">
      <input
        type="text"
        placeholder="Select Card...."
        className="bg-white h-[50px] w-[400px] rounded-2xl px-4 justify-center items-center flex ml-40 mt-9"
        // value={}
        // onChange={}
      />
      {data &&
        data.getUsers.map((e) => (
          <Card
            key={e._id}
            _id={e._id}
            Username={e.Username}
            Firstname={e.Firstname}
            Middlename={e.Middlename}
            Lastname={e.Lastname}
            Age={e.Age}
            Email={e.Email}
            Phonenumber={e.Phonenumber}
            Country={e.Country}
            State={e.State}
            City={e.City}
          />
        ))}
    </div>
  );
};

export default Api;
