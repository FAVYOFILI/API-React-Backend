import React from "react";

interface Props {
  _id: number;
  Firstname: string;
  Middlename: string;
  Lastname: string;
  Email: string;
  Phonenumber: number;
  Username: string;
  City: string;
  State: string;
  Age: string;
  Country: string;
}

const Card: React.FC<Props> = ({
  _id,
  Firstname,
  Middlename,
  Lastname,
  Email,
  Phonenumber,
  Username,
  City,
  State,
  Age,
  Country,
}) => {
  return (
    <div className="flex-wrap">
      <section className="flex flex-col justify-between items-center bg-black rounded-2xl text-white text-[20px]">
        <div key={_id} className="">
          <h1>{Username}</h1>
          <p>{Firstname}</p>
          <p>{Middlename}</p>
          <p className="">{Lastname}</p>
          <p className="">{Age}</p>
          <p className="">{Email}</p>
          <p className="">{Phonenumber}</p>
          <p className="">{Country}</p>
          <p className="">{State}</p>
          <p className="">{City}</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
