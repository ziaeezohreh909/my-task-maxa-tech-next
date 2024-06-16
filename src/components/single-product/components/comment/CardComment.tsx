import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { commentType } from "../../hooks/types";

interface CardCommetProps {
  comment: commentType;
}

const CardCommet: React.FC<CardCommetProps> = ({ comment }) => {
  return (
    <Card sx={{ width: "100%", p: 1 }}>
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        <Box
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            width: 60,
            height: 60,
            flexShrink: 0,
          }}
        >
          <Image src={comment.avatar} alt="user" width={60} height={60} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "medium" }}>
            {comment.name} <br />
            <Typography
              sx={{ fontSize: "12px", fontWeight: "medium", color: "#9E9E9E" }}
            >
              {new Date().toLocaleDateString()}
            </Typography>
          </Typography>
          <Image
            src="/Desktop/ratestar.png"
            alt="user"
            width={53}
            height={32}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          eius, quos cum deserunt dignissimos a impedit minus ab possimus
          voluptatem ratione distinctio ad sapiente autem, tenetur voluptas
          soluta obcaecati in!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="text"
            endIcon={<ArrowDropDown />}
            sx={{ textTransform: "none" }}
          >
            Show More
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button startIcon={<ThumbUpOffAltIcon />}>18</Button>
          <Button startIcon={<ThumbDownOffAltIcon />}>12</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CardCommet;
