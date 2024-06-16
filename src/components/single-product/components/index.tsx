import Box from "@mui/material/Box";
import React from "react";
import SingleProduct from "./single-product";
import Tabs from "./tabs";
import TechnicalDetails from "./technical";
import { useRouter } from "next/router";
import { useGetProductByCategory, useGetProductById } from "../hooks";
import SimilarProductsSlider from "./similar-products";
import PayInfoCard from "./payinfocard/PayInfoCard";
import CommentSide from "./comment/CommentSide";
import CardCommet from "./comment/CardComment";
import Comments from "./comment/Comments";

export default function SingleProductWidget() {
  const routerId = useRouter().query.id;
  const { data: oneProduct, isSuccess: isProductLoaded } = useGetProductById(
    Number(routerId)
  );
  const { data: productsByCategory } = useGetProductByCategory(
    isProductLoaded ? oneProduct?.categoryName : "",
    isProductLoaded ? Number(routerId) : 0
  );

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <SingleProduct product={oneProduct!}></SingleProduct>
        <PayInfoCard />
      </Box>

      <Tabs></Tabs>
      <TechnicalDetails detail={oneProduct!}></TechnicalDetails>
      <SimilarProductsSlider
        products={productsByCategory!}
      ></SimilarProductsSlider>
      <Box marginBottom={"4px"} display={"flex"} flexDirection={"row"} gap={"20px"}>
        <CommentSide />
        <Comments />
      </Box>
    </Box>
  );
}
