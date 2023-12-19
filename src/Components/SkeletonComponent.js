import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";


export default function SkeletonComponent() {
  return(
    <>
    <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "4rem" }} />
        <Skeleton variant="rounded" width={1280} height={350} />
      </Stack>
    </>
  )

}
