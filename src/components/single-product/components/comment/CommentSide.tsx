import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function CommentSide() {
  const [comment, setComment] = useState("");
  const [cardHeight, setCardHeight] = useState("380px");

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
    setCardHeight(event.target.value ? "auto" : "346px");
  };
  return (
    <Card
      sx={{ width: "288px", height: cardHeight, transition: "height 0.3s" }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          <Typography variant="h6" fontSize={"20px"} fontWeight={"medium"}>
            Commets
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", fontSize: "16px" }}>
            leave your comments here for other customers
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Share your thoughts about this product here"
            fullWidth
            multiline
            rows={2}
            maxRows={6}
            value={comment}
            onChange={handleCommentChange}
            InputLabelProps={{
              style: {
                whiteSpace: "normal",
                fontSize: "14px",
                fontWeight: "light",
              },
            }}
          />

          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: "48px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "light",
            }}
          >
            Comment
          </Button>
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            By feature
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "space-between",
              // width: "288px",
              height: "48px",
            }}
          >
            <Typography
              variant="body1"
              component="h6"
              sx={{ fontSize: "11px" }}
            >
              Battery
              <br /> charge Monitor
              <br /> Lightness
            </Typography>
            <Image
              src="/Desktop/Frame.png"
              alt="farme"
              width={100}
              height={20}
            />
            <Typography
              variant="h6"
              sx={{ fontSize: "12px", textAlign: "center" }}
            >
              4.8
              <br /> 4.9
              <br /> 4.3
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
