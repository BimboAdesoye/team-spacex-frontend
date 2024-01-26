import dashboardImage from "../assets/Dashboard.svg";

const DashboardImage = () => {
  return (
    <div className="block">
      <div className="dashboard-img">
        <img
          src={dashboardImage}
          alt=""
          style={{
            height: "750.14px",
            width: "1155px",
            position: "absolute",
            top: "688px",
            left: "178px",
          }}
        />
      </div>
    </div>
  );
};

export default DashboardImage;
