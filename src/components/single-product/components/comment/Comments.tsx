import { Box, Card, Typography } from "@mui/material";
import CardCommet from "./CardComment";
import { useGetCommentData } from "../../hooks";
import { commentType } from "../../hooks/types";
import { getRandomSubset } from "../../services";

export default function Comments() {
  const { data, isLoading, error } = useGetCommentData();
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (error) {
    return <Typography> Error loading comments</Typography>;
  }

  const randomComments = data ? getRandomSubset(data, 5) : [];

  return (
    <Card sx={{ width: "912px" , mb:4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {randomComments.map((comment: commentType) => (
          <CardCommet key={comment.id} comment={comment} />
        ))}
      </Box>
    </Card>
  );
}
