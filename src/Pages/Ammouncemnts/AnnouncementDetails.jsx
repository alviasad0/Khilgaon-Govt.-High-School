import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnnouncementDetails = () => {
  const { id } = useParams();
  const [allData, setdata] = useState([]);
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    fetch("/LatestAnnouncements.json")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        const announcement = data.find((item) => item._id === id);
        setDisplayData(announcement); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  console.log(allData);

  return (
    <div className="">
      
      {displayData && <p className="text-center text-xl font-bold pt-10">{displayData.announcement}</p>}
    </div>
  );
};

export default AnnouncementDetails;
