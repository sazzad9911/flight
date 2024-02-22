import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Economy({ value, data, onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className=" flex items-center gap-2 cursor-pointer font-bold"
      >
        {value?.element}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {data?.map((doc, i) => (
          <MenuItem key={i}
            onClick={() => {
              onClick(doc);
            }}
          >
            {doc.element}
          </MenuItem>
        ))}

        <div onClick={handleClose} className="text-green-500 mx-4 my-1 cursor-pointer">
          Apply
        </div>
      </Menu>
    </div>
  );
}
