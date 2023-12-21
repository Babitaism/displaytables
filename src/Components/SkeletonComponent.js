import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function SkeletonComponent() {
  const store = useSelector((state) => state);
  let flag = false;

  if (
    store.hasOwnProperty("showSkeleton") &&
    store.showSkeleton &&
    store.showSkeleton.value
  ) {
    flag = store.showSkeleton.value;
  }

  if (flag) {
    return (
      <div style={{position: 'absolute'}}>
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: "4rem" }} />
          <Skeleton variant="rounded" width={1280} height={350} />
        </Stack>
      </div>
    );
  } else {
    return <></>;
  }
}
