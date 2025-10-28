import { LuUserRound } from "react-icons/lu";
import Button from "./Button";
import { forwardRef } from "react";

function UserButton() {
  return (
    <Button type="primary" shape="circle">
      <LuUserRound />
    </Button>
  );
}

export default UserButton;
