import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function PayInfoCard() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(
      event.target.value === selectedValue ? "" : event.target.value
    );
  };
  return (
    <Card sx={{ mt: 5 }}>
      <CardContent
        sx={{
          width: "312px",
          height: "410px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "medium" }}>
            $ 1299.00
          </Typography>
          <Image
            src="/Desktop/discount.png"
            alt="discount-tag"
            width={65}
            height={24}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            // px: 1,
          }}
        >
          <Typography sx={{ color: "#717171", fontSize: "13px" }}>
            last price $ 1410.87
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "100%",
            // px: 1,
            color: "#444444",
          }}
        >
          <RadioGroup value={selectedValue} onChange={handleRadioChange}>
            <FormControlLabel
              value="PayNow"
              control={<Radio />}
              label="Pay Now"
            />
            <FormControlLabel
              value="Buy"
              control={<Radio />}
              label="Buy in installments"
            />
          </RadioGroup>
          <FormHelperText sx={{ px: 4, color: "#444444" }}>
            choose your insallments period
          </FormHelperText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#717171",
              borderColor: "#717171",
              width: "60px",
              height: "51px",
              fontSize: "12px",
              textTransform: "none",
              "&:hover": {
                color: "#717171",
                borderColor: "#717171",
                // backgroundColor: "transparent",
              },
            }}
          >
            3 Months
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#717171",
              borderColor: "#717171",
              width: "60px",
              height: "51px",
              fontSize: "12px",
              textTransform: "none",
              "&:hover": {
                color: "#717171",
                borderColor: "#717171",
              },
            }}
          >
            6 Months
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#717171",
              borderColor: "#717171",
              width: "60px",
              height: "51px",
              fontSize: "12px",
              textTransform: "none",
              "&:hover": {
                color: "#717171",
                borderColor: "#717171",
              },
            }}
          >
            12 Months
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#717171",
              borderColor: "#717171",
              width: "60px",
              height: "51px",
              fontSize: "12px",
              textTransform: "none",
              "&:hover": {
                color: "#717171",
                borderColor: "#717171",
              },
            }}
          >
            18 Months
          </Button>
        </Box>
        <Box
          display={"flex"} 
          justifyContent={"flex-start"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography fontSize={"14px"}>$433.00</Typography>
          <Typography color={"#717171"} fontSize={"14px"}>
            /Month
          </Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: "48px", borderRadius: "10px", textTransform: "none" }}
        >
          Buy Now
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            height: "48px",
            borderRadius: "10px",
            borderColor: "blue",
            textTransform: "none",
          }}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
