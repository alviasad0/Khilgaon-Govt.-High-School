import { useParams } from "react-router-dom";

const AnnouncementDetails = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <p>this is the details page </p>
    </div>
  );
};

export default AnnouncementDetails;
