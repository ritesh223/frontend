import React from "react";
import "./sidebar.css";
import ballon from "../../img/background/ballon.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { useSelector, useDispatch } from "react-redux";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
const Sidebar = () => {
    const { vendor } = useSelector(
      (state) => state.vendor
    );

  return (
    <div className="sidebar">
      <Link to="/vendor">
        <img src={vendor.avatar.url} id='profile_img_vendor' alt="Budgettrip" />
      </Link>
      <Link to={`/vendor/dashboard/${vendor._id}`}>
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Your Products">
            <Link to={`/vendor/products/${vendor._id}`}>
              <TreeItem nodeId="2" label="All Hotels" icon={<PostAddIcon />} />
            </Link>
            <Link to={`/vendor/products1/${vendor._id}`}>
              <TreeItem
                nodeId="3"
                label="All Packages"
                icon={<PostAddIcon />}
              />
            </Link>

            <Link to="/vendor/product/new">
              <TreeItem nodeId="4" label="Add Hotel" icon={<AddIcon />} />
            </Link>
            <Link to="/vendor/product1/new">
              <TreeItem nodeId="5" label="Add Package" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>

      <Link to={`/vendor/orders/${vendor._id}`}>
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to={`/userrequests`}>
        <p>
          <RequestPageIcon />
          Requests
        </p>
      </Link>

      {/* <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link> */}
      {/* <Link to="/vendor/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link> */}

      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Reviews">
            <Link to={`/vendor/reviews`}>
              <TreeItem nodeId="2" label="Hotel" icon={<DomainAddIcon />} />
            </Link>
            <Link to={`/vendor/reviews1`}>
              <TreeItem
                nodeId="3"
                label="Holiday Packages"
                icon={<HolidayVillageIcon />}
              />
            </Link>

           
            
          </TreeItem>
        </TreeView>
      </Link>
    </div>
  );
};

export default Sidebar;
