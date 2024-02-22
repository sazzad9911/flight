import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu({ title, data, onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [adult, onAdult] = React.useState(0);
  const [children, onChildren] = React.useState(0);
  const [infants, setInfants] = React.useState(0);

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
        {(adult+children+infants)?(adult+children+infants)+" ":""}Passenger
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
        <MenuItem
         onClick={() => {
          onAdult(D=>D+1)
          onClick({
            adult:adult,
            children:children,
            infants:infants
          })
        }}
        >
          <div className="flex gap-10 items-center justify-between  w-full">
            <div>
              <div className=" font-medium">Adult</div>
              <div>{">12 Years"}</div>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <div className="w-5 h-5 flex justify-center items-center rounded-sm bg-gray-300">
                -
              </div>
              {adult}
              <div className="w-5 h-5 flex justify-center items-center rounded-sm bg-green-300">
                +
              </div>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            onChildren(D=>D+1)
            onClick({
              adult:adult,
              children:children,
              infants:infants
            })
          }}
        >
          <div className="flex gap-10 items-center justify-between  w-full">
            <div>
              <div className=" font-medium">Children</div>
              <div>2-12 Years</div>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <div className="w-5 h-5 flex justify-center items-center rounded-sm bg-gray-300">
                -
              </div>
              {children}
              <div className="w-5 h-5 flex justify-center items-center rounded-sm bg-green-300">
                +
              </div>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setInfants(D=>D+1)
            onClick({
              adult:adult,
              children:children,
              infants:infants
            })
          }}
        >
          <div className="flex gap-10 items-center justify-between w-full">
            <div>
              <div className=" font-medium">Infants</div>
              <div>{"<2 Years"}</div>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <div className="w-5 h-5 flex justify-center items-center rounded-sm bg-gray-300">
                -
              </div>
              {infants}
              <div className="w-5 h-5 flex justify-center items-center rounded-sm bg-green-300">
                +
              </div>
            </div>
          </div>
        </MenuItem>
        <div onClick={handleClose} className="text-green-500 mx-4 my-1 cursor-pointer">
          Apply
        </div>
      </Menu>
    </div>
  );
}
