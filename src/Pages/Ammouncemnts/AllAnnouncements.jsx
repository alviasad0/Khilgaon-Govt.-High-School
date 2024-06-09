import { Link, useLoaderData } from "react-router-dom";

const AllAnnouncements = () => {

    const allAnnouncements = useLoaderData()
    console.log(allAnnouncements);
    return (
      <div className="max-w-screen-2xl mx-auto">
        <div className="space-y-5">
          {allAnnouncements.map((announcement) => (
            <div key={announcement._id}>
              <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{announcement.announcement}</h2>

                  <div className="card-actions justify-end">
                    <button className="btn bg-[#646CFF] text-white ">
                      <Link to={`/announcementDetails/${announcement._id}`}>
                        View Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllAnnouncements;